import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="font-bold text-xl"><button Link to ="/home">VITONE</button></span>
            </div>
            <div className="flex">
              <Link to="/news" className="px-3 py-2 text-gray-600 hover:text-gray-900">News</Link>
              <Link to="/events" className="px-3 py-2 text-gray-600 hover:text-gray-900">Events</Link>
              <Link to="/complaints" className="px-3 py-2 text-gray-600 hover:text-gray-900">Complaints</Link>
              <Link to="/placements" className="px-3 py-2 text-gray-600 hover:text-gray-900">Placements</Link>
              <Link to="/forums" className="px-3 py-2 text-gray-600 hover:text-gray-900">Forums</Link>
              <Link to="/marketplace" className="px-3 py-2 text-gray-600 hover:text-gray-900">Marketplace</Link>
              <Link to="/achievements" className="px-3 py-2 text-gray-600 hover:text-gray-900">Achievements</Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4 pt-8">
        <h1 className="text-4xl font-bold text-center">Welcome to VITONE</h1>
        <p className="text-lg text-center mt-4">All features of college in one website (Based for Students)</p>
      </div>
    </div>
  );
};

export default HomePage;
