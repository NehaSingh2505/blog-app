// UpdatePost.jsx
import './UpdatePost.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
      <h2 style={{ fontFamily: "cursive", color: "#970747" }}>Blog Posts</h2>

const UpdatePost = ({ posts, updatePost }) => {
  const { id } = useParams();
  const [updatedPost, setUpdatedPost] = useState(null);

  useEffect(() => {
    const postToUpdate = posts.find((post) => post.id === parseInt(id));
    if (postToUpdate) {
      setUpdatedPost(postToUpdate);
    }
  }, [id, posts]);

  const handleChange = (e) => {
    setUpdatedPost({
      ...updatedPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost(updatedPost, parseInt(id)); // Send updated post to the parent component
  };

  if (!updatedPost) return <div>Loading...</div>;

  return (
    <div className="page-content" style={{ backgroundColor: '#970747' }}>
      <h2 style={{ color: 'white', fontFamily: 'cursive' }}>Update Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{ color: 'white', fontFamily: 'cursive' }}>Title:</label>
          <input
            type="text"
            name="title"
            value={updatedPost.title}
            onChange={handleChange}
            placeholder="Update title"
            required
          />
        </div>
        <div>
          <label style={{ color: 'white', fontFamily: 'cursive' }}>Content:</label>
          <textarea
            name="content"
            value={updatedPost.content}
            onChange={handleChange}
            placeholder="Update content"
            required
          />
        </div>
        <button
          type="submit"
          style={{
            color: 'black',
            fontFamily: 'cursive',
            backgroundColor: '#f5dfe3',
          }}
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default UpdatePost;
