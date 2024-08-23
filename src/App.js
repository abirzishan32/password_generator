import React from 'react';
import PasswordGenerator from './components/PasswordGenerator';
import './style.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-cyan-300">
      <h1 className="text-4xl font-bold mb-8 neon-text">Password Generator</h1>
      <PasswordGenerator />
    </div>
  );
}

export default App;
