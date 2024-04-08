import React from 'react'
import { FaArrowRight, FaBuilding, FaList, FaUser } from 'react-icons/fa'
import { Fa42Group, FaPeopleGroup } from 'react-icons/fa6'





const Ambassador = () => {
  return (
    <div>
      {/* Header Goes Here */}
      <div className="w-11/12 mx-auto h-[50vh] flex items-center rounded-md my-6 shadow-md" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`, backgroundSize: "cover", backgroundPosition: "center bottom" }}>
        <div className="h-full w-full bg-[#000000ca] text-white flex items-center rounded-md shadow-md">
        <div className='p-8'>
          <p className="text-3xl font-bold">
            Hello <span className='text-red-600'>Firstname Lastname</span>
          </p>
          <p className="text-md font-semibold">
            Campus Amabassador <span className='text-red-600'>Campus Name</span>
          </p>
        </div>
        </div>
      </div>
      {/* Header Here */}

      {/* Ambassador Actions */}

      <div className="w-11/12 mx-auto">
        <p className="text-2xl my-6 pt-12 font-bold">
          Ambassador Actions Actions
        </p>
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
        <div className="bg-white w-full mb-4 md:mb-0 md:my-4 p-6 shadow-md rounded-md flex flex-col justify-between h-[25vh]">
          <div > 
            <FaUser className='rounded-full h-10 w-10 bg-red-900 text-white p-1' />
            <p className="text-xl font-semibold my-6">
              View Member Requests
            </p>
          </div>
          <p className="text-md font-bold text-red-800 flex items-center gap-2">
            Click Here <FaArrowRight />
          </p>

          <p className="text-lg font-semibold">
            To View All Member Requests
          </p>
        </div>
        <div className="bg-white my-4 w-full p-6 shadow-md rounded-md flex flex-col justify-between h-[25vh]">
          <div className=''>
            <FaList className='rounded-full bg-red-900 text-white p-1 h-10 w-10' />
            <p className="text-xl font-semibold my-6">
              Create An Event
            </p>
          </div>
          <p className="text-md font-bold text-red-800 flex items-center gap-2">
            Click Here <FaArrowRight />
          </p>

          <p className="text-lg font-semibold">
            To Create An Event
          </p>
        </div>
        <div className="bg-white my-4 w-full p-6 shadow-md rounded-md flex flex-col justify-between h-[25vh]">
          <div>
            <FaPeopleGroup className='rounded-full bg-red-900 text-white p-1 h-10 w-10' />
            <p className="text-xl font-semibold my-6">
              View Events
            </p>
          </div>
          <p className="text-md font-bold text-red-800 flex items-center gap-2">
            Click Here <FaArrowRight />
          </p>

          <p className="text-lg font-semibold">
            To View & Manage Events
          </p>
        </div>
      </div>

    </div>
  )
}

export default Ambassador