import React from 'react'
import { useParams } from 'react-router-dom';

const BlopPage = ({ blogs }) => {

  const blogData = blogs
  const { blogTitle } = useParams();
  const blog = blogData.find(blog => blog.title === blogTitle);

  if (!blog) {
    // Handle case when the blog is not found
    return <div>Blog not found</div>;
  }

  return (
    <div>
    <section className="py-12 bg-gray-100 flex flex-col justify-center">
      <div className="mx-auto sm:px-6 lg:px-8 pt-12">
        <div className="relative">
          <div className="lg:w-10/12 m-auto">
          <p className="text-sm font-medium tracking-wides uppercase" style={{ fontFamily: "Montserrat" }}>
                Welcome to the Blogs of The <span className="text-red-800">The Uniques</span> Community
              </p>
            <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-800">
                {blog.title}
              </span>{' '}
            </h1>
            <p className="max-w-lg mt-4 text-l font-normal text-gray-400 sm:mt-8 ">
              {blog.description}
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className="w-10/12 m-auto my-8 min-h-[100vh]">
      <div className="prose lg:prose-lg">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>
  </div>
  );
};

export default BlopPage