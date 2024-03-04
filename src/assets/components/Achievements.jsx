import React from 'react';
import Navbar from './Navbar';

const Achievements = () => {
  // Fake alumni achievements data
  const alumniAchievements = [
    { id: 1, name: 'John Doe', achievement: 'Won Nobel Prize in Physics' },
    { id: 2, name: 'Jane Smith', achievement: 'Started a successful tech company' },
    { id: 3, name: 'Michael Johnson', achievement: 'Published best-selling novel' },
    { id: 4, name: 'Emily Davis', achievement: 'Received Pulitzer Prize for Journalism' },
    { id: 5, name: 'David Brown', achievement: 'Became CEO of Fortune 500 company' },
    { id: 6, name: 'Sarah Adams', achievement: 'Won Olympic Gold Medal in Swimming' },
    { id: 7, name: 'Alex Carter', achievement: 'Founded a non-profit organization helping children' },
    { id: 8, name: 'Jennifer White', achievement: 'Invented groundbreaking medical device' },
    { id: 9, name: 'Matthew Thompson', achievement: 'Awarded Presidential Medal of Freedom' },
    { id: 10, name: 'Laura Wilson', achievement: 'Became renowned artist with works displayed in major galleries' },
    // Add more fake achievements as needed
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mt-8 mb-4">Achievements</h1>
        <div className="mb-8">
          <p className="text-lg text-center italic">Once a Lion, Always a Lion</p>
          <hr className="my-4 border-t-2 border-gray-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {alumniAchievements.map(alumni => (
            <div key={alumni.id} className="bg-white rounded-lg shadow border border-black p-4">
              <h2 className="text-xl font-bold mb-2">{alumni.name}</h2>
              <p>{alumni.achievement}</p>
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

export default Achievements;
