// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Navbar component to display navigation links
const Navbar = () => {
  return (
    <nav className="bg-indigo-600 shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="font-bold text-xl"> <Link to="/home">VITone</Link></span>
          </div>

          {/* Navigation links */}
          <div className="flex">
            <Link to="/news" className="px-3 py-2 text-white hover:text-gray-900">News</Link>
            <Link to="/events" className="px-3 py-2 text-white hover:text-gray-900">Events</Link>
            <Link to="/complaints" className="px-3 py-2 text-white hover:text-gray-900">Complaints</Link>
            <Link to="/placements" className="px-3 py-2 text-white hover:text-gray-900">Placements</Link>
            <Link to="/forums" className="px-3 py-2 text-white hover:text-gray-900">Forums</Link>
            <Link to="/marketplace" className="px-3 py-2 text-white hover:text-gray-900">Marketplace</Link>
            <Link to="/achievements" className="px-3 py-2 text-white hover:text-gray-900">Achievements</Link>
            <Link to="/signin" className="px-3 py-2 text-white hover:text-gray-900">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
