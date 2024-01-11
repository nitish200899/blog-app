import { useState } from "react"

const Register = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const registerHandler =  async (event) => {
        event.preventDefault()
        const response = await fetch("http://localhost:5500/register",{
            method : "POST",
            body : JSON.stringify({username,password}),
            headers : {"Content-Type" : 'application/json'}
        })   
        if(response.status == 200){
            alert("User registered successfully!!")   
        }
        else{
            alert("Failed to register. try again!!")   
        }
        setUsername("")
        setPassword("")
    }

    return (
        <form className="register" onSubmit={registerHandler}>
            <h1>Register</h1>
            <input 
                type="text"  
                placeholder="Username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <button>Register</button>
        </form>
    )
}

export default Register

