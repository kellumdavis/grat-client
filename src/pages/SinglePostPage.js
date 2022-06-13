import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"

function SinglePostPage(props){
    const navigate = useNavigate()
    const {id} = useParams()

    const [post, setPost] = useState(null)
    const [title, setTitle] = useState('')
    const onSave = async (event) => {
        event.preventDefault()
        const response = await fetch(`http://localhost:4000/api/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            },
            body: JSON.stringify({body: title})
        }) 

        console.log(response)

        
            navigate('/posts');
        
    }

    const getPostData = async () => {
        const response = await fetch(`http://localhost:4000/api/posts/${id}`)
        const data = await response.json()
        setPost(data.post)
        setTitle(data.post.body)
        console.log(data)
    }

    const handleOnChange = (event) => {
        setTitle(event.target.value)
    }

    useEffect(() => {
        getPostData();
      }, []);
    if(!post){
        return <p>Loading</p>
    }
    return (
        <div>
            <h1>Edit Post</h1>
            <form onSubmit={onSave}>
            <label htmlFor="name">Name</label>
            <input id="name" value={title} onChange={handleOnChange}/>
            <button type="submit" >Save</button>
            </form>
        </div>
    )
  } 
  
  export default SinglePostPage