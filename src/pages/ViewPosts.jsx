import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ViewPosts = ({ posts }) => {
  const navigate = useNavigate();

  const handleDeleteClick = (id) => {
    navigate("/delete", { state: { postId: id } }); // Pass the post ID to delete page
  };

  return (
    <div className="view-posts-container">
      <h2 style={{ fontFamily: "cursive" }}>View Posts</h2>
      <table className="posts-table">
        <thead>
          <tr>
            <th style={{ fontFamily: "cursive" }}>#</th>
            <th style={{ fontFamily: "cursive" }}>Title</th>
            <th style={{ fontFamily: "cursive" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post.id}>
              <td>{index + 1}</td>
              <td>{post.title}</td>
              <td>
                <Link to={`/view/${post.id}`}>
                  <button style={{ fontFamily: "cursive" }} className="action-btn view-btn">
                    View
                  </button>
                </Link>
                <Link to={`/update/${post.id}`}>
                  <button style={{ fontFamily: "cursive" }} className="action-btn edit-btn">
                    Edit
                  </button>
                </Link>
                <button
                  style={{ fontFamily: "cursive" }}
                  className="action-btn delete-btn"
                  onClick={() => handleDeleteClick(post.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewPosts;
