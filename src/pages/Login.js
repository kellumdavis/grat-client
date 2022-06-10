import React,{ useState } from "react"

function Register() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   async function loginUser(event) {
       event.preventDefault();
       const response = await fetch('http://localhost:4000/api/login', {
           method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email, 
                password,
            }),
        })

        const data = await response.json()

        if (data.user) {
            alert('Login succesful')
            window.location.href = '/user'
        } else {
            alert('Please check your username and password')
        }
    }

    return(
        <div>
        <h1>Login</h1>
            <form onSubmit={loginUser}>
                
                <input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                />
                <input 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                />
            <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register;