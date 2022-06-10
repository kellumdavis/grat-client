import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const UserProfile = () => {
    const history = useNavigate()

    async function populateQuote() {
       const req = await fetch('http://localhost:4000/api/user', {
           headers: {
               'x-access-token': localStorage.getItem('token'),
           },
       })

       const data = req.json()
       console.log(data)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            if (!user) {
                localStorage.removeItem('token')
                history.replace( '/login')
            } else {
                populateQuote()
            }
        }
    }, [])

    return(
        <>
        <h1>Hello Bro</h1>
        </>
    )
}

export default UserProfile;