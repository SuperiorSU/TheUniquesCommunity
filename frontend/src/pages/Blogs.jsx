import React from 'react'
import BlogHeader from '../components/Blog/BlogHeader'
import AllBlogs from '../components/Blog/AllBlogs'

const Blogs = ({ blogs, handleClick }) => {
  return (
    <div>
      <BlogHeader />
      <AllBlogs blogs={blogs} handleClick={handleClick} />
    </div>
  )
}

export default Blogs