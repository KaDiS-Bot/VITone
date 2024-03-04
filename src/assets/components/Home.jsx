import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <nav className="bg-white shadow">
        <Navbar />
      </nav>
      <div className="container mx-auto px-4 pt-8">
        <h1 className="text-4xl font-bold text-center">Welcome to VITONE</h1>
        <p className="text-lg text-center mt-4">All features of college in one website (Based for Students)</p>
      <img className="mx-auto h-80 w-auto" src="https://media.istockphoto.com/id/1286836526/vector/fire-lion.jpg?s=612x612&w=0&k=20&c=Qh8JCAbOTkmZTKVV6rxkpjgxqjC3ZQo-HFG_ychEyIM=" alt="Logo" />
        
      </div>
    </div>
  );
};

export default HomePage;
