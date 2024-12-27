import React, { useState } from "react";
import "./HomePage.css";

const HomePage = ({ posts }) => {
  const [expandedPostId, setExpandedPostId] = useState(null);

  // Function to toggle the expanded/collapsed state of a post
  const toggleExpand = (postId) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  return (
    <div className="homepage-container">
      <h2 style={{ fontFamily: "cursive", color: "#970747" }}>Blog It Up</h2>
      
      {/* Grid container for posts */}
      <div className="posts-container"> {/* This   where the grid is applied */}
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            {/* Post Title */}
            <h3 className="post-title">{post.title}</h3>
            
            {/* Post Image */}
            <img src={post.image} alt={post.title} className="post-image" />
            
            {/* Post Content */}
            <p className="post-content">
              {expandedPostId === post.id ? (
                <>
                  {post.content}
                  {/* "Show Less" link */}
                  <span
                    className="toggle-read"
                    onClick={() => toggleExpand(post.id)}
                  >
                    Show Less
                  </span>
                </>
              ) : (
                <>
                  {post.content.slice(0, 100)}...
                  {/* "Read More" link */}
                  <span
                    className="toggle-read"
                    onClick={() => toggleExpand(post.id)}
                  >
                    Read More
                  </span>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
