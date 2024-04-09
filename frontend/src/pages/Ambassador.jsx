import React from 'react'
import { useState } from 'react'
import { FaArrowRight, FaBuilding, FaList, FaUser } from 'react-icons/fa'
import { Fa42Group, FaPeopleGroup } from 'react-icons/fa6'

import { Link } from 'react-router-dom'



const Ambassador = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const correctUsername = 'ronit';
  const correctPassword = 'ronit@123';

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === correctUsername && password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      setError('Incorrect username or password. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className=" mx-auto min-h-[100vh] flex flex-col justify-center bg-[#00000050]">
        <form onSubmit={handleSubmit} className="bg-white w-11/12 md:w-1/2 lg:w-1/3 mx-auto min-h-[50vh] flex flex-col px-12 justify-between mt-12 rounded-md shadow-md py-12">

          <p className="text-2xl font-bold mb-6">
            Ambassador Login
          </p>

          <div className='flex flex-col gap-6'>
            <label htmlFor="username" className="text-lg font-semibold mb-2">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="border rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring focus:ring-red-800 focus:ring-opacity-50 px-4 py-2 mb-4"
            />
            <label htmlFor="password" className="text-lg font-semibold mb-2">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="border rounded-md border-gray-300 shadow-sm focus:border-red-800 focus:ring focus:ring-red-800 focus:ring-opacity-50 px-4 py-2 mb-4"
            />
            <button type="submit" className="bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-900 focus:outline-none focus:ring focus:ring-red-800 focus:ring-opacity-50">Submit</button>
          </div>
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </form>
      </div>
    );
  }
  return (
    <div>
      {/* Header Goes Here */}
      <div className="w-11/12 mx-auto h-[50vh] flex items-center rounded-md my-6 shadow-md" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`, backgroundSize: "cover", backgroundPosition: "center bottom" }}>
        <div className="h-full w-full bg-[#000000ca] text-white flex items-center rounded-md shadow-md">
          <div className='p-8'>
            <p className="text-3xl font-bold">
              Hello <span className='text-red-600'>Ronit Jaiprakash</span>
            </p>
            <p className="text-md font-semibold">
              Campus Amabassador @ <span className='text-red-600'>SVIET</span>
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
        <Link to={'/campus-ambassador/member-request'}>
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
        </Link>
        <Link to={'/campus-ambassador/create-event'}>
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

        </Link>

        <Link to={'/campus-ambassador/event-list'}>
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
          </div></Link>
      </div>

    </div>
  )
}

export default Ambassador