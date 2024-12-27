import React, { useState } from "react";

const InsertPost = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Default placeholder image if no image is provided
    const placeholderImage = "https://picsum.photos/400/400";

    const newPost = {
      id: Date.now(),
      title,
      content,
      image: image || placeholderImage, // Use placeholder if no image
      date: new Date().toLocaleString(),
    };

    addPost(newPost);
    setTitle("");
    setContent("");
    setImage("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="insert-post-container">
      <h2 style={{fontFamily:"cursive"}}>Create a New Post</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            required
          />
        </div>
        <div className="form-group">
          <label style={{fontFamily:"cursive"}} htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter post content"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label style={{fontFamily:"cursive"}} htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button style={{fontFamily:"cursive"}} type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InsertPost;
