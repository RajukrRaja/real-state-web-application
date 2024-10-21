import React, { useState, useEffect } from 'react';

const MyBlog = () => {
  const [blogs, setBlogs] = useState(() => {
    // Load blogs from local storage or use an empty array if no data exists
    const savedBlogs = localStorage.getItem('blogs');
    return savedBlogs ? JSON.parse(savedBlogs) : [];
  });
  const [showDialog, setShowDialog] = useState(false);
  const [newBlog, setNewBlog] = useState({ title: '', content: '', fullContent: '', image: '' });

  useEffect(() => {
    // Save blogs to local storage whenever it changes
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewBlog(prevState => ({
        ...prevState,
        image: reader.result
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleAddBlog = () => {
    setBlogs(prevBlogs => [...prevBlogs, { ...newBlog, id: Date.now() }]);
    setNewBlog({ title: '', content: '', fullContent: '', image: '' });
    setShowDialog(false);
  };

  const handleDeleteBlog = (id) => {
    setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '36px', color: '#007bff', marginBottom: '30px', textAlign: 'center' }}>My Blog -  Opinion</h1>
      <button style={{ marginBottom: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => setShowDialog(true)}>Add Blog</button>
      {showDialog && (
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
            <h2 style={{ marginBottom: '10px' }}>Add New Blog</h2>
            <input type="text" name="title" placeholder="Title" value={newBlog.title} onChange={handleInputChange} style={{ marginBottom: '10px', width: '100%', padding: '10px', boxSizing: 'border-box' }} />
            <textarea name="content" placeholder="Content" value={newBlog.content} onChange={handleInputChange} style={{ marginBottom: '10px', width: '100%', minHeight: '100px', padding: '10px', boxSizing: 'border-box' }} />
            <input type="file" accept="image/*" onChange={handleImageUpload} style={{ marginBottom: '10px' }} />
            <button onClick={handleAddBlog} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add</button>
            <button onClick={() => setShowDialog(false)} style={{ marginLeft: '10px', padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cancel</button>
          </div>
        </div>
      )}
      {blogs.map((blog) => (
        <div key={blog.id} style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#333', color: '#fff', borderRadius: '5px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>{blog.title}</h2>
          <img src={blog.image} alt="Blog" style={{ maxWidth: '100%', marginBottom: '10px', borderRadius: '5px' }} />
          <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{blog.content}</p>
          <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Read More</button>
          <button style={{ marginLeft: '10px', padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MyBlog;
