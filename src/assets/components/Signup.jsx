import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Signup logic goes here
    console.log('Signing up with:', username, email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py- px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Image */}
        <img className="mx-auto h-80 w-auto" src="https://static.vecteezy.com/system/resources/previews/020/030/846/large_2x/vit-letter-logo-design-on-white-background-vit-creative-circle-letter-logo-concept-vit-letter-design-vector.jpg" alt="Logo" />

        {/* Sign Up Form */}
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
        </div>
        <form className="mt-8 space-y-6">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          <button
            type="button"
            onClick={handleSignup}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </form>
        
        {/* Social Media Sign Up */}
        <div className="flex justify-center items-center space-x-4">
          {/* Google Icon */}
          <a href="https://www.google.com/accounts/Login" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.freepik.com/256/1199/1199414.png" alt="Google" className="h-8 w-8" />
          </a>
          {/* Twitter Icon */}
          <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer">
            <img src="https://static.vecteezy.com/system/resources/previews/018/930/695/original/twitter-logo-twitter-icon-transparent-free-free-png.png" alt="Twitter" className="h-10 w-10" />
          </a>
          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="LinkedIn" className="h-10 w-10" />
          </a>
        </div>

        <div className="text-center text-sm">
          <p>Already have an account? <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500 ">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
