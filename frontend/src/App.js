import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('User');

  return (
    <div className="App">
      <header className="App-header">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Greeting
        </button>
        <p>Hello {username}</p>
      </header>
    </div>
  );
}

export default App;
