import React from 'react';

const BlogHeader = () => {
  return (
    <div>
      <section className="py-12 bg-gray-100 text-black flex flex-col mb-10 justify-center">
        <div className="px-4 py-16 mx-auto w-10/12">
          <div className="relative">
            <div className="">
              <p className="text-sm font-medium tracking-wides uppercase" style={{ fontFamily: "Montserrat" }}>
                Welcome to the Blogs of The <span className="text-red-800">The Uniques</span> Community
              </p>
              <h1 className="mt-6 text-4xl font-normal text-gray-800 sm:mt-10 sm:text-5xl lg:text-6xl xl:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-800">
                  Exploring The Techincal & Entreprenurial <br />
                </span>{' '}
                At The Uniques Community
              </h1>
             
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogHeader;
