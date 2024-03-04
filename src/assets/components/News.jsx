// News.jsx
import React from 'react';
import Navbar from './Navbar';

const News = () => {
  return (
    <div>
      {/* Navbar component */}
      <Navbar />

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        {/* News Title */}
        <h1 className="text-3xl font-bold mb-4">News about Vit Bhopal College</h1>

        {/* News items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* News item 1 */}
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">News Title 1</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet...</p>
          </div>

          {/* News item 2 */}
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">News Title 2</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet...</p>
          </div>

          {/* News item 3 */}
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">News Title 3</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet...</p>
          </div>

          {/* Repeat for more news items */}
          {/* News item 4 */}
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">News Title 4</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet...</p>
          </div>

          {/* News item 5 */}
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">News Title 5</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet...</p>
          </div>

          {/* News item 6 */}
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">News Title 6</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet...</p>
          </div>

          {/* News item 7 */}
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">News Title 7</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet...</p>
          </div>

          {/* News item 8 */}
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">News Title 8</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet...</p>
          </div>

          {/* News item 9 */}
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">News Title 9</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet...</p>
          </div>
        </div>

        {/* Pagination */}
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

export default News;
