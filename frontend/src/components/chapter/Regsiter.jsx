import { CalendarDaysIcon, MapIcon, TrophyIcon } from '@heroicons/react/24/solid'
import React from 'react'

import { useState } from 'react';

const Regsiter = () => {
  const [showModal, setShowModal] = useState(false);

  // Handler for showing the modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Handler for hiding the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Form submit handler
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    course: '',
    semester: '',
    techStack: '',
    resumeLink: ''
  });

  // Handler for form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form validation and submission logic here
    console.log(formData);
    // Reset form data after submission
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      course: '',
      semester: '',
      techStack: '',
      resumeLink: ''
    });
  };
  return (
    <div>
      <div className='w-10/12 mx-auto bg-white p-4 rounded-md shadow-md flex flex-wrap lg:flex-wrap-reverse justify-between items-center'>
        <div className='flex flex-wrap gap-3'>
          <p className="text-lg font-medium flex items-center flex-wrap gap-3"><TrophyIcon className='flex-shrink-0' width={20} height={20} />TheUniques SVIET Chapter</p>

        </div>
        <button onClick={handleShowModal} className='mt-5 md:mt-3 lg:mt-0 bg-red-800 text-white px-2 py-1 rounded-md mb-6 lg:mb-0 w-full lg:w-fit lg:h-auto'>Join This Chapter</button>
      </div>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          {/* Modal content */}
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
            <div className="px-6 py-4">
              {/* Close button */}
              <div className="flex justify-end">
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course</label>
                  <input
                    type="text"
                    name="course"
                    id="course"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formData.course}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="semester" className="block text-sm font-medium text-gray-700">Semester</label>
                  <input
                    type="text"
                    name="semester"
                    id="semester"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formData.semester}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="techStack" className="block text-sm font-medium text-gray-700">Tech Stack</label>
                  <input
                    type="text"
                    name="techStack"
                    id="techStack"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formData.techStack}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="resumeLink" className="block text-sm font-medium text-gray-700">Resume Link</label>
                  <input
                    type="text"
                    name="resumeLink"
                    id="resumeLink"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formData.resumeLink}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>

  )
}

export default Regsiter