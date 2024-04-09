import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '', // Initialize content as an empty string
    imageUrl: '',
    category: '',
    authorName: '',
    authorLinkedin: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContentChange = (value) => {
    // Set content to the HTML value provided by React Quill
    setFormData({ ...formData, content: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://godigitify-nexus.onrender.com/blogs/createBlog', formData);
      // Reset form after successful submission
      setFormData({
        title: '',
        content: '',
        imageUrl: '',
        category: '',
        authorName: '',
        authorLinkedin: '',
      });

      alert("Blog Added Successfully")
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <div className="w-10/12 mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Create Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <ReactQuill
          value={formData.content}
          onChange={handleContentChange}
          placeholder="Content"
          className="w-full border rounded-lg"
        />
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="authorName"
          value={formData.authorName}
          onChange={handleChange}
          placeholder="Author Name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          name="authorLinkedin"
          value={formData.authorLinkedin}
          onChange={handleChange}
          placeholder="Author LinkedIn"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
