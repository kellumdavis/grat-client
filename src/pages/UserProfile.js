import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const UserProfile = () => {
    const navigate = useNavigate()

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
                navigate('login', { replace: true } );
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