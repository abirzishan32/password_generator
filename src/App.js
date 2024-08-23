import React from 'react';
import PasswordGenerator from './components/PasswordGenerator';
import './style.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-cyan-300">
      <h1 className="text-5xl font-extrabold mb-8 neon-text tracking-wider animate-flicker animate-glow">Password Generator</h1>
      <PasswordGenerator />
    </div>
  );
}

export default App;
