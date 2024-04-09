import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookShareButton,
  GabIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LineShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
  XIcon,
} from "react-share";
const Stories = ({ blogs, handleClick }) => {
  const storiesData = [
    {
      title: "The Uniques",
      description: "Building Corporate Environment",
      buttonText: "Read More",
      bgColor: "#ca0019",
      hoverBgColor: "#d3979e48",
      imgUrl: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "The Uniques",
      description: "Teach How Industry Works And How Roles are Assigned",
      buttonText: "Read More",
      bgColor: "#ca0019",
      hoverBgColor: "#d3979e48",
      imgUrl: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: "The Uniques",
      description: "Become a Part of Faculty Free Community",
      buttonText: "Read More",
      bgColor: "#ca0019",
      hoverBgColor: "#d3979e48",
      imgUrl: 'https://images.unsplash.com/photo-1550305080-4e029753abcf?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];
  const blogData = blogs.slice(-3)
  return (
    <div className="w-11/12 mx-auto flex justify-center items-center">
      <div className="w-full py-6">
        <h1 className="text-4xl font-bold">Stories From The <span className="text-red-800">Community</span></h1>
        <div className="flex justify-between flex-wrap mt-2 mb-3 items-center">
          <h2 className="py-2">
            Get inspired by the Industrial insights and the Corporate Culture in your Campus...
          </h2>
          <div className="flex flex-wrap my-4 md:my-0 gap-3 justify-center items-center">
            <div className="text-white py-1 px-2 border-[1px] font-semibold rounded-[6px] bg-[#ca0019] text-[12px] ">
              View more stories
            </div>
            <div className="text-[#ca0019]  rounded-[6px] py-1 px-2 border-[1px] cursor-pointer font-semibold hover:bg-[#d3979e48] text-[12px] ">
              Submit your story
            </div>
          </div>
        </div>

        <div className="flex flex-wrap mt-8">
          {blogData.map((blog, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 h-[100%] p-4">
              <div
                className="bg-cover bg-center h-64"
                style={{ backgroundImage: `url(${blog.imageUrl})` }}
              ></div>
              <div className="bg-white p-4 mt-4" style={{ borderLeft: "1px solid #00112d50" }}>
                <h2 className="text-l font-semibold">{blog.title}</h2>
                <p className="text-sm line-clamp-2">{blog.description}</p>
                <div className='mt-4'>
                  <Link onClick={handleClick} to={`/blogs/`} className="mt-2 bg-red-800 text-white hover:bg-red-900 py-1 px-4 rounded-md text-sm transition-transform duration-300 transform hover:translate-x-2">
                    Read More <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
                <div className='flex justify-between mt-5'>
                  <p className='text-md font-medium'>{blog.authorName}</p>
                  <div className='flex gap-2'>
                    <p className='text-[#00112d]'>
                      <a href={blog.authorLinkedin}> <FontAwesomeIcon icon={faLinkedin} /></a>

                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
