import React from 'react';
import Navbar from './Navbar';

const News = () => {
  // Fake news data
  const news = [
    { id: 1, title: 'New Research Discovery', description: 'Researchers at VIT Bhopal have made a groundbreaking discovery in the field of biotechnology.' },
    { id: 2, title: 'Student Achievements', description: 'Several students from VIT Bhopal have secured top ranks in national-level competitions.' },
    { id: 3, title: 'Upcoming Events', description: 'Exciting events are planned for the upcoming semester. Stay tuned for more updates!' },
    { id: 4, title: 'Faculty Spotlight', description: 'Meet the brilliant minds behind the success of VIT Bhopal. Learn more about our esteemed faculty.' },
    { id: 5, title: 'New Campus Facilities', description: 'State-of-the-art facilities have been added to the VIT Bhopal campus to enhance the learning experience for students.' },
    // Add more fake news items as needed
  ];

  return (
    <div>
      {/* Navbar component */}
      <Navbar />

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        {/* News Title */}
        <h1 className="text-3xl font-bold mb-4">News about VIT Bhopal College</h1>

        {/* News items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map(item => (
            <div key={item.id} className="bg-white shadow rounded-lg p-4 border border-black">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
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
