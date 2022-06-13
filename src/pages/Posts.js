import React, { useEffect, useState } from "react";
import SinglePost from "../components/SinglePost";

function Posts(props) {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch("http://localhost:4000/api/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data)
    setPosts(data.posts);
  };

  useEffect(() => {
    getPosts();
  }, []);
  console.log(posts);
  return (
    <div className="postContainer">
      <h1>All Posts</h1>
      {posts.map((post) => (
        <SinglePost onDeleteSuccess={getPosts} post={post} />
      ))}
    </div>
  );
}

export default Posts;
