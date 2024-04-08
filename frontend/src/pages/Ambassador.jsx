import React from 'react'
import { FaArrowRight, FaBuilding, FaList, FaUser } from 'react-icons/fa'
import { Fa42Group, FaPeopleGroup } from 'react-icons/fa6'





const Ambassador = () => {
    return (
        <div>
            {/* Header Goes Here */}
            <div className="w-11/12 mx-auto h-[30vh] flex items-center">
                <div className='p-8'>
                <p className="text-3xl font-bold">
                    Hello <span className='text-red-800'>Firstname Lastname</span>
                </p>
                <p className="text-md font-semibold">
                    Campus Amabassador <span className='text-red-800'>Campus Name</span>
                </p>
                </div>
            </div>
            {/* Header Here */}

            {/* Ambassador Actions */}

            <div className="w-11/12 mx-auto">
        <p className="text-2xl my-6 pt-12 font-bold">
          Ambassador Actions Actions
        </p>
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white w-full mb-4 md:mb-0 md:my-4 p-6 shadow-md rounded-md flex flex-col justify-between h-[25vh]">
          <div>
            <FaUser className='rounded-full h-10 w-10 bg-red-900 text-white p-1' />
            <p className="text-xl font-semibold my-6">
              View Member Requests
            </p>
          </div>
          <p className="text-md font-bold text-red-800">
            Click Here <FaArrowRight />
          </p>

          <p className="text-lg font-semibold">
            To View All Member Requests
          </p>
        </div>
        <div className="bg-white my-4 w-full p-6 shadow-md rounded-md flex flex-col justify-between h-[25vh]">
          <div>
            <FaList className='rounded-full bg-red-900 text-white p-1 h-10 w-10' />
            <p className="text-xl font-semibold my-6">
              Create An Event
            </p>
          </div>
          <p className="text-md font-bold text-red-800">
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
          <p className="text-md font-bold text-red-800">
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