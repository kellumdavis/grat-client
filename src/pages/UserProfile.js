import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jsonwebtoken';


const UserProfile = () => {
    const navigate = useNavigate()
    const [quote, setQuote] = useState(null)
    const [tempQuote, setTempQuote] = useState('')

    async function populateQuote() {
       const req = await fetch('http://localhost:4000/api/user', {
           headers: {
               'x-access-token': localStorage.getItem('token'),
           },
       })

       const data = await req.json()
    //    console.log(data)
       setQuote(data.quote)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            console.log(user)
            if (!user) {
                localStorage.removeItem('token')
                navigate('login', { replace: true } );
            } else {
                populateQuote()
            }
        }
    }, [])

    async function updateQuote(event) {
        event.preventDefault()
        // const data = await JSON.parse(
        //     localStorage.getItem('chat-app-user')
        //   );
        const req = await fetch('http://localhost:4000/api/posts', {
            method: 'POST',
           headers: {
               'Content-Type': 'application/json',
               'x-access-token': localStorage.getItem('token'),
           },
           body: JSON.stringify({
                quote: tempQuote,
                
           }),
       })

       const data = await req.json()
       if(data.status === 'ok') {
           setQuote(tempQuote)
           setTempQuote('')
       } else {
           alert(data.error)
       }
    }

    function loaded() {
        if (quote.length == 0) return null
        console.log({quote})
        return (
            <div>
                {quote[0].body}
            </div>
        )
    }

    return(
        <div className='formContainer'>
        <h1></h1>
        {quote ? loaded() : <h1>No quotes yet!</h1>}
        <form  onSubmit={updateQuote}>
        <p>{tempQuote.name}</p>
            <input type="text"
             placeholder="Quote"
             value={tempQuote}
             onChange={(e) => setTempQuote(e.target.value)}
             />
             <input type="submit" value="Update quote" />
        </form>
        </div>
    )
}

export default UserProfile;