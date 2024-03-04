import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Events = () => {
  // Fake events data
  const events = [
    { id: 1, name: 'Hackathon 2024', description: 'Join us for the biggest hackathon of the year!' },
    { id: 2, name: 'Sports Day', description: 'Get ready for a day full of exciting sports events!' },
    // Add more fake events as needed
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mt-8 mb-4">Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow border border-black p-4">
              <h2 className="text-xl font-bold mb-2">{event.name}</h2>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-l">
            Previous
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-r">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
