import React, { useState } from 'react';

const MemberRequests = () => {
    // Dummy data for demonstration
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const memberRequests = [
        {
            fullName: 'John Doe',
            phoneNumber: '123-456-7890',
            email: 'john@example.com',
            course: 'Computer Science',
            semester: 'Spring 2024',
            techStack: 'React, Node.js, MongoDB',
            resumeLink: 'https://example.com/john-doe-resume.pdf'
        },
        {
            fullName: 'Jane Smith',
            phoneNumber: '987-654-3210',
            email: 'jane@example.com',
            course: 'Data Science',
            semester: 'Fall 2023',
            techStack: 'Python, TensorFlow, SQL',
            resumeLink: 'https://example.com/jane-smith-resume.pdf'
        }
        // Add more member requests as needed
    ];

    const openModal = (request) => {
        setSelectedRequest(request);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='h-auto lg:h-[100vh]'>
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
            <div className="w-11/12 mx-auto py-8">
                <h1 className="text-2xl font-bold mb-4">Member Requests</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Semester</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tech Stack</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resume</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {memberRequests.map((memberRequest, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">{memberRequest.fullName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{memberRequest.phoneNumber}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{memberRequest.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{memberRequest.course}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{memberRequest.semester}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{memberRequest.techStack}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <a href={memberRequest.resumeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Resume</a>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button onClick={() => openModal(memberRequest)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            View & Accept
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {isModalOpen && selectedRequest && (
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                            {/* Icon for modal */}
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3 className="text-lg leading-6 font-medium text-gray-900">Member Request Details</h3>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">Full Name: {selectedRequest.fullName}</p>
                                                <p className="text-sm text-gray-500">Phone Number: {selectedRequest.phoneNumber}</p>
                                                <p className="text-sm text-gray-500">Email: {selectedRequest.email}</p>
                                                <p className="text-sm text-gray-500">Course: {selectedRequest.course}</p>
                                                <p className="text-sm text-gray-500">Semester: {selectedRequest.semester}</p>
                                                <p className="text-sm text-gray-500">Tech Stack: {selectedRequest.techStack}</p>
                                                <p className="text-sm text-gray-500">Resume: <a href={selectedRequest.resumeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Resume</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row">
                                <button onClick={closeModal} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-800 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                                        Accept
                                    </button>
                                    <button onClick={closeModal} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MemberRequests;
