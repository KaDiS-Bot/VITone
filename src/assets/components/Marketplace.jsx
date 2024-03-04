import React from 'react';
import Navbar from './Navbar';

const Marketplace = () => {
  // Fake garbage data
  const items = [
    { id: 1, name: 'Potato Chips', price: '$1.99', description: 'Delicious potato chips for snacking.' },
    { id: 2, name: 'Soft Drinks', price: '$0.99', description: 'Refreshing soft drinks in various flavors.' },
    { id: 3, name: 'Snacks Pack', price: '$3.49', description: 'Assorted snacks pack for munching.' },
    { id: 4, name: 'Biscuits', price: '$2.49', description: 'Crunchy biscuits perfect with tea or coffee.' },
    { id: 5, name: 'Notebooks', price: '$4.99', description: 'High-quality notebooks for writing notes.' },
    { id: 6, name: 'Assignments', price: '$1.99', description: 'Prepared assignments for various subjects.' },
    // Add more fake items as needed
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mt-8 mb-4">Marketplace</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow border border-black p-4">
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p>{item.description}</p>
              <p className="text-gray-700 mt-2">{item.price}</p>
            </div>
          ))}
        </div>
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
  );
};

export default Marketplace;
