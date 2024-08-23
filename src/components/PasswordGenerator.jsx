import React from 'react';
import ReactSwitch from 'react-switch';

const PasswordGenerator = () => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg neon-box">
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Password Length:</label>
        <input type="number" className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400" />
      </div>

      <div className="mb-6 flex items-center justify-between">
        <label className="text-lg font-semibold">Include Uppercase:</label>
        <ReactSwitch 
          height={24}
          width={48}
          handleDiameter={24}
          offColor="#4A5568"
          onColor="#63B3ED"
        />
      </div>

      <div className="mb-6 flex items-center justify-between">
        <label className="text-lg font-semibold">Include Numbers:</label>
        <ReactSwitch 
          height={24}
          width={48}
          handleDiameter={24}
          offColor="#4A5568"
          onColor="#63B3ED"
        />
      </div>

      <div className="mb-6 flex items-center justify-between">
        <label className="text-lg font-semibold">Include Special Characters:</label>
        <ReactSwitch 
          height={24}
          width={48}
          handleDiameter={24}
          offColor="#4A5568"
          onColor="#63B3ED"
        />
      </div>

      <button className="w-full py-2 px-4 rounded-md bg-cyan-500 hover:bg-cyan-400 text-white font-bold transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400">
        Generate Password
      </button>
    </div>
  );
}

export default PasswordGenerator;
