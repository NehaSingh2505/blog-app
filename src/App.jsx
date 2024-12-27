// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import InsertPost from './pages/InsertPost';
import ViewPosts from './pages/ViewPosts';
import UpdatePost from './pages/UpdatePost';
import DeletePost from './pages/DeletePost';

const App = () => {
  const [posts, setPosts] = useState([]);

  // Function to add a new post
  const addPost = (post) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };

  // Function to update an existing post
  const updatePost = (updatedPost, id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === id ? updatedPost : post))
    );
  };

  // Function to delete a post by ID
  const deletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  return (
    <Router>
      <header>
        <h1 style={{ fontFamily: 'cursive' }}>Blog App</h1>
      </header>
      <div className="app-layout">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage posts={posts} />} />
            <Route path="/insert" element={<InsertPost addPost={addPost} />} />
            <Route path="/view" element={<ViewPosts posts={posts} />} />
            <Route
              path="/update/:id"
              element={<UpdatePost posts={posts} updatePost={updatePost} />}
            />
            <Route
              path="/delete"
              element={<DeletePost posts={posts} setPosts={setPosts} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
