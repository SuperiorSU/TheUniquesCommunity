import React from "react";
import stand from "../../assets/about/transit.gif";
import { FaQuoteLeft } from "react-icons/fa";
const Review = () => {
  return (
    <div className="w-11/12 mx-auto py-12 justify-center items-center ">
      <div className="w-full text-center h-[maxcontent]">
        <p className="text-3xl font-bold">
          What Are <span className="text-rose-800">We?</span>
        </p>
        <p className=" p-6 text-sm lg:text-lg mx-auto text-center">
          <FaQuoteLeft className="text-center mx-auto mb-5"/>
          "The Uniques Community is a community where everyone is welcome. We
          help students bridge the gap between theory and practice and grow
          their knowledge by providing a peer-to-peer learning environment, by
          conducting workshops, study jams and building solutions for local
          businesses."
        </p>

        <img src={stand} className="mx-auto w-[60%]" alt="" />
      </div>

      {/* <div className='flex justify-evenly items-center sm:flex-wrap md:flex-nowrap lg:flex-nowrap flex-wrap'>
            <div className='lg:w-1/2 md:w-1/2 sm:w-full w-full'>
            <iframe width="94%" className='mx-auto' height="380" src="https://www.youtube.com/embed/kyT7r_qu5ds?si=73ILjNjPbD2GIr9Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className='lg:w-1/2 md:w-1/2 sm:w-full w-full'>
                
                <p className=' p-6 text-[17px] text-center'>"The Uniques Community is a community where everyone is welcome. We help students bridge the gap between theory and practice and grow their knowledge by providing a peer-to-peer learning environment, by conducting workshops, study jams and building solutions for local businesses."</p>
            </div>
        </div> */}
    </div>
  );
};

export default Review;
