import React,{ useState } from "react"
import { useNavigate } from 'react-router-dom';
function Register() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   async function registerUser(event) {
       event.preventDefault();
       const response = await fetch('http://localhost:4000/api/register', {
           method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email, 
                password,
            }),
        })

        const data = await response.json()

        if(data.status === 'ok') {
            navigate('/login');
        }

        console.log(data)
    }

    return(
        <div className="formContainer">
            <form className="form" onSubmit={registerUser}>
        <h1>Register</h1>
                <input 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                />
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
            <input className="buttonForm" type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register;