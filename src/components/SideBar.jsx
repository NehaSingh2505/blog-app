// components/SideBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li style={{fontFamily:"cursive"}}><Link to="/">Home</Link></li>
        <li style={{fontFamily:"cursive"}}><Link to="/insert">Insert Post</Link></li>
        <li style={{fontFamily:"cursive"}}><Link to="/view">View Posts</Link></li>
        <li style={{fontFamily:"cursive"}}><Link to="/update">Update Post</Link></li>
        <li style={{fontFamily:"cursive"}}><Link to="/delete">Delete Post</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
