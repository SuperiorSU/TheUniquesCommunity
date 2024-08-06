import React from 'react'
import Button from '../about/Button'
import cc from '../events/code-crusade3.jpg'
const UpcomingCard = (props) => {
    const {title, img, date, description} = props;
  return (
    <div className="p-9 relative">
        <div className="bg-[#ca0019] p-2 text-white absolute top-0 left-9 rounded-ee-xl">
            <p>Upcoming Event</p>
        </div>
        <div className="flex flex-wrap-reverse justify-between items-center border-[1px] border-slate-300 rounded-lg">
            <div className="lg:w-1/2 md:w-full w-full p-6">
                <h3 className='text-2xl text-[#ca0019] py-4 font-semibold'>Code Crusade 3.0</h3>
                <p className="font-medium">{date?date:"Coming Soon"}</p>
                
                <p className="py-2 mt-2 mb-1"><span className="font-semibold underline">Description:</span><br /> 
                Code Crusade is an introductory event for freshers to gain hands-on programming experience and enhance logical reasoning. Dive into languages like Python and C++, engage in practical sessions, and tackle real-world problems with guidance from experienced mentors. Participate in workshops, compete in coding contests, and test your skills through problem-solving challenges. The winner will receive direct entry into the esteemed batch, The Uniques.
                </p>

                <Button text="Know More" link="/"/>
            </div>
            <div className="lg:w-1/2 md:w-full w-full">
                <img src={cc} alt="Code Crusade" className="object-cover w-full h-[376px] mx-auto rounded-lg"/>
            </div>
        </div>
    </div>
  )
}

export default UpcomingCard