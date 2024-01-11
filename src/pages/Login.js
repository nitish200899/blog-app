import { useState } from "react"

const Login = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const loginHandler = async  (event) => {
        event.preventDefault()
        const response = await fetch("http://localhost:5500/login",{
            method : "POST",
            body : JSON.stringify({username,password}),
            headers : {"Content-Type" : "application/json"},
            credentials : "include"
        })
        if(response.ok){
            alert("User logged in successfully!!")
        }
        else{
            alert("Failed to login. Try again!!")
        }
        setUsername("")
        setPassword("")     
    }

    return (
        <form className="login" onSubmit={loginHandler}>
            <h1>Login</h1>
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
            <button>Login</button>
        </form>
    )
}

export default Login