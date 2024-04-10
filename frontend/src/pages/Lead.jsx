import React from 'react'
import { useState } from 'react';
import lead from './lead.png'

const Lead = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        academicYear: '',
        collegeUniversity: '',
        phoneNumber: '',
        address: '',
        skillsInterests: '',
        contributionVision: '',
        expectations: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <>
            <div style={{ backgroundImage: `url(https://images.unsplash.com/photo-1638029202288-451a89e0d55f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }} className="bg-center bg-cover">
                <section
                    className="w-full flex flex-col items-center justify-center h-[35rem] no-repeat bg-[#000000d2]"

                >
                    <div className="wrapper flex flex-col items-center justify-center text-center w-[90%] lg:w-[65%] md:w-[90%] text-white">
                        <div className="inline-flex text-md rounded-lg  border-blue-gray-50 bg-red-800 text-white py-1 lg:px-4 px-1 font-medium">
                            Become a Campus Ambassador
                        </div>
                        <div

                            color="blue-gray"
                            className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-4xl font-semibold capitalize"
                        >

                            Lead a group of talented and crafy individual and explore the technical landscape together
                        </div>
                        <div
                            variant="lead"
                            className=" mx-auto w-full !text-gray-500 lg:text-md text-base "
                        >
                            Collaborating closely with The Uniques Community, Ambassadors receive
                            support as they establish and nurture vibrant on-campus communities.
                            This partnership ensures Ambassadors have the resources and guidance
                            needed to cultivate inclusive environments where learning and growth
                            thrive.
                        </div>

                    </div>
                </section>
            </div>
            <div className="w-11/12 mx-auto py-12 flex flex-wrap ">

                <div className='w-full lg:w-2/3'>
                    <form onSubmit={handleSubmit} className=' p-8 shadow-md rounded-md'>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Uniques Community Form</h2>
                            <div className="mb-4">
                                <label htmlFor="name" className="block font-semibold mb-1">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border rounded py-2 px-3"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block font-semibold mb-1">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border rounded py-2 px-3"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="academicYear" className="block font-semibold mb-1">Academic Year:</label>
                            <input
                                type="text"
                                id="academicYear"
                                name="academicYear"
                                value={formData.academicYear}
                                onChange={handleChange}
                                className="w-full border rounded py-2 px-3"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="collegeUniversity" className="block font-semibold mb-1">College/University:</label>
                            <input
                                type="text"
                                id="collegeUniversity"
                                name="collegeUniversity"
                                value={formData.collegeUniversity}
                                onChange={handleChange}
                                className="w-full border rounded py-2 px-3"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phoneNumber" className="block font-semibold mb-1">Phone Number:</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full border rounded py-2 px-3"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address" className="block font-semibold mb-1">Address:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full border rounded py-2 px-3"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="skillsInterests" className="block font-semibold mb-1">Skills or Interests:</label>
                            <textarea
                                id="skillsInterests"
                                name="skillsInterests"
                                value={formData.skillsInterests}
                                onChange={handleChange}
                                className="w-full border rounded py-2 px-3"
                                required
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="contributionVision" className="block font-semibold mb-1">Contribution Vision:</label>
                            <textarea
                                id="contributionVision"
                                name="contributionVision"
                                value={formData.contributionVision}
                                onChange={handleChange}
                                className="w-full border rounded py-2 px-3"
                                required
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="expectations" className="block font-semibold mb-1">Expectations:</label>
                            <textarea
                                id="expectations"
                                name="expectations"
                                value={formData.expectations}
                                onChange={handleChange}
                                className="w-full border rounded py-2 px-3"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                            Submit
                        </button>
                    </form>
                </div>
                <div className='w-full lg:w-1/3 sticky h-full top-10 p-8'>
                    <img src={lead} alt="" width="100%" />
                </div>
            </div></>
    );
};

export default Lead