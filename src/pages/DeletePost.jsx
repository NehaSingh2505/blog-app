import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './DeletePost.css'
const DeletePost = ({ posts, setPosts }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { postId } = location.state || {}; // Get postId from state

  const handleDelete = () => {
    if (!postId) {
      setError("No post selected for deletion.");
      return;
    }

    // Remove the post with the given ID
    const updatedPosts = posts.filter((post) => post.id !== postId);

    if (updatedPosts.length === posts.length) {
      setError("Invalid Post ID. Post not found.");
    } else {
      setPosts(updatedPosts);
      navigate("/"); // Redirect to home page
    }
  };

  return (
    <div className="delete-post-container">
      <h2 style={{ color: "white", fontFamily: "cursive" }}>Delete Post</h2>
      {postId && (
        <p style={{ color: "white", fontFamily: "cursive" }}>
          Are you sure you want to delete  this Blog?
        </p>
      )}
      <button
        type="button"
        onClick={handleDelete}
        style={{ fontFamily: "cursive", backgroundColor: "red", color: "white" }}
      >
        Confirm Delete
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default DeletePost;
