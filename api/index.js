const mongoose  = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

const User = require('./models/User');

const saltRounds = 10;
const secretKey = 'jsdbcjef8yw78eyndbcj@#$%^&*()';
const salt = bcrypt.genSaltSync(saltRounds);
const app = express();

app.use(cors({
    origin : "http://localhost:3000",
    credentials : true
}));
app.use(express.json());

app.post('/register',async(req,res) => {
    const {username,password} = req.body;
    try{
        const userDoc = await User.create({
            username,
            password : bcrypt.hashSync(password, salt)
        })
        res.status(200).json({username : userDoc.username})
    }
    catch(err){
       res.status(500).json(err)
    }
})

app.post('/login', async(req,res) => {
    const {username,password} = req.body;
    try{
        const user = await User.findOne({username});
        if(user){
            const passOk = bcrypt.compareSync(password,user.password)
            if(passOk){
                jwt.sign({username,id : user._id},secretKey,{},(err,token) => {
                    if(err) throw new Error("Token generation failed")
                    res.cookie('token', token).json({
                        id:user._id,
                        username,
                    });
                })
            }
            else{
                throw new Error("wrong credentials")
            }
        }
        else{
            throw new Error("User not found")
        }
    }
    catch(e){
        console.log(e.message)
        res.status(500).json({error : e.message})
    }
})

mongoose.connect('mongodb+srv://nitishkesarwani20:raFvQmnwJZXjcPSk@cluster0.uwe9ick.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err))

app.listen(5500)