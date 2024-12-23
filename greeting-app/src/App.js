import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('User');
  const [showGreeting, setShowGreeting] = useState(false);

  const handleButtonClick = () => {
    setShowGreeting(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button 
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" 
        onClick={handleButtonClick}
      >
        Greeting
      </button>
      {showGreeting && (
        <h1 className="mt-4 text-2xl font-bold">
          Hello, {username}
        </h1>
      )}
    </div>
  );
}

export default App;