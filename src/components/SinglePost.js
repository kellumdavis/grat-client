import React from "react";
import { Link } from "react-router-dom";
function SinglePost(props) {
  const { post, onDeleteSuccess } = props;
  const onDelete = async () => {
      const deletePost = await fetch(`http://localhost:4000/api/posts/${post._id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem('token'),
        }
      })
      onDeleteSuccess()
  };

  const onEdit = async () => {};
  return (
    <div className="posts">
      
      <p>{post.userId.name}</p>
      <p>{post.body}</p>
        <p>{post.createdAt}</p>
      <Link  to={`/posts/${post._id}`}>
       <button className="buttonForm" >Edit</button>
      </Link>
      <button className="buttonForm" type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default SinglePost;
