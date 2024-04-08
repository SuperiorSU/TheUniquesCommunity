import React from 'react';

const EventForm = () => {
    return (
        <div className="w-11/12 mx-auto py-8">
            <div className="py-12">
                <div className='p-8'>
                    <p className="text-3xl font-bold">
                        Hello <span className='text-red-800'>Firstname Lastname</span>
                    </p>
                    <p className="text-md font-semibold">
                        Campus Amabassador <span className='text-red-800'>Campus Name</span>
                    </p>
                </div>
            </div>
            
            <form className="w-11/12 p-8 mx-auto shadow-md rounded-md">
            <h1 className="text-2xl font-bold">Event Form</h1>
                <div className="mb-4">
                    <label htmlFor="eventName" className="block text-gray-700 text-sm font-bold mb-2">Event Name</label>
                    <input type="text" id="eventName" name="eventName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter event name" />
                </div>
                <div className="mb-4">
                    <label htmlFor="eventDate" className="block text-gray-700 text-sm font-bold mb-2">Event Date</label>
                    <input type="date" id="eventDate" name="eventDate" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="eventLocation" className="block text-gray-700 text-sm font-bold mb-2">Location</label>
                    <input type="text" id="eventLocation" name="eventLocation" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter event location" />
                </div>
                <div className="mb-4">
                    <label htmlFor="eventBudget" className="block text-gray-700 text-sm font-bold mb-2">Potential Budget</label>
                    <input type="number" id="eventBudget" name="eventBudget" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter potential budget" />
                </div>
                <div className="mb-4">
                    <label htmlFor="eventTime" className="block text-gray-700 text-sm font-bold mb-2">Time</label>
                    <input type="time" id="eventTime" name="eventTime" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label htmlFor="eventTags" className="block text-gray-700 text-sm font-bold mb-2">Tags</label>
                    <input type="text" id="eventTags" name="eventTags" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter event tags" />
                    <p className="text-gray-600 text-sm mt-1">Separate tags with commas (e.g., technology, conference, workshop)</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="eventCategory" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                    <select id="eventCategory" name="eventCategory" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option value="">Select category</option>
                        <option value="workshop">Workshop</option>
                        <option value="conference">Conference</option>
                        <option value="meetup">Meetup</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default EventForm;
