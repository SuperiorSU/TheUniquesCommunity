import React from 'react';

const EventList = () => {
  // Dummy event data for demonstration
  const events = [
    {
      id: 1,
      name: 'Tech Conference 2024',
      date: '2024-05-15',
      location: 'San Francisco, CA',
      budget: '$5000',
      time: '10:00 AM - 5:00 PM',
      tags: ['Technology', 'Conference'],
      category: 'Conference'
    },
    {
      id: 2,
      name: 'Data Science Workshop',
      date: '2024-06-20',
      location: 'New York, NY',
      budget: '$3000',
      time: '1:00 PM - 4:00 PM',
      tags: ['Data Science', 'Workshop'],
      category: 'Workshop'
    }
    // Add more events as needed
  ];

  return (
    <div className="w-11/12 mx-auto py-8 min-h-[100vh]">
      <h1 className="text-2xl lg:text-4xl font-bold mb-4">Event List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map(event => (
          <div key={event.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-12">
              <h2 className="text-2xl font-semibold mb-5 text-red-800">{event.name}</h2>
              <p><span className="font-semibold text-lg mb-2 text-red-800">Date:</span> {event.date}</p>
              <div className="flex flex-wrap gap-5 justify-between my-2">

                <p><span className="font-semibold ">Location:</span> {event.location}</p>
                <p><span className="font-semibold">Time:</span> {event.time}</p>
              </div>
              {/* <p><span className="font-semibold">Budget:</span> {event.budget}</p> */}

              <div className="flex flex-wrap gap-5 justify-between">
                <p><span className="font-semibold">Tags:</span> {event.tags.join(', ')}</p>
                <p><span className="font-semibold">Category:</span> {event.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
