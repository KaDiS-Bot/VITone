import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Complaints = () => {
  // Fake complaints data
  const complaints = [
    { id: 1, title: 'Slow Internet Connection', description: 'The internet connection in my room is very slow.' },
    { id: 2, title: 'Noisy Neighbors', description: 'My neighbors are making a lot of noise late at night.' },
    { id: 3, title: 'Broken Elevator', description: 'The elevator in Block A is not working properly.' },
    // Add more fake complaints as needed
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mt-8 mb-4">Complaints</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {complaints.map(complaint => (
            <div key={complaint.id} className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-bold mb-2">{complaint.title}</h2>
              <p>{complaint.description}</p>
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

export default Complaints;
