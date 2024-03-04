import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Placements = () => {
  // Fake placement data
  const placements = [
    { id: 1, companyName: 'Google', position: 'Software Engineer', salary: '100,000 USD' },
    { id: 2, companyName: 'Facebook', position: 'Product Manager', salary: '120,000 USD' },
    { id: 3, companyName: 'Amazon', position: 'Data Scientist', salary: '110,000 USD' },
    // Add more fake placements as needed
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mt-8 mb-4">Placements</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {placements.map(placement => (
            <div key={placement.id} className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-bold mb-2">{placement.companyName}</h2>
              <p>Position: {placement.position}</p>
              <p>Salary: {placement.salary}</p>
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

export default Placements;
