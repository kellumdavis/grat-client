
import React, { useEffect, useState }from "react"


function Posts(props){

    const [posts, setPosts] = useState([])

   const getPosts = async () => {
     

    const response = await fetch('http://localhost:4000/api/posts', {
           method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        })

        const data = await response.json()
        setPosts(data.posts)
   }

   useEffect(() => {
    getPosts()
   }, [])
console.log(posts)
    return (
        <div> 
            <h1>All Posts</h1>
            {posts.map((post) => {
               return <div key={post._id}>
                    <p>{post.body}</p>
                </div>
            })}
        </div>
    )
  } 
  
  export default Posts