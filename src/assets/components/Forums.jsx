import React, { useState } from 'react';
import Navbar from './Navbar';

const Forums = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [username, setUsername] = useState('Anonymous');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;
    const newMessage = {
      username,
      text: inputText,
      timestamp: new Date().toISOString(),
    };
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mt-8 mb-4">Forums</h1>
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <div>
            <label htmlFor="username" className="block font-bold mb-1">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className="border-gray-300 border-solid border-2 rounded px-2 py-1 mb-2"
            />
          </div>
          <textarea
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="w-full border-gray-300 border-solid border-2 rounded px-2 py-1"
          ></textarea>
          <button onClick={handleSendMessage} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Send</button>
        </div>
        <div>
          {messages.map((message, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4 mb-2">
              <p className="font-bold">{message.username}</p>
              <p>{message.text}</p>
              <p className="text-gray-500 text-xs">{new Date(message.timestamp).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forums;
