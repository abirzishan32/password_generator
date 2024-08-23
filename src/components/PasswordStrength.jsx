import React, { useState } from 'react';
import zxcvbn from 'zxcvbn'; // A library to check password strength

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(null);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const result = zxcvbn(newPassword);
    setStrength(result);
  };

  const getCrackTime = (crackTimes) => {
    return Object.values(crackTimes).find(Boolean) || 'Unknown';
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-xl neon-box">
      <h2 className="text-3xl font-bold mb-6 text-center text-cyan-300">Password Strength Checker</h2>
      <div className="mb-6">
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          className="w-full p-2 rounded-md bg-gray-900 text-cyan-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>
      {strength && (
        <div className="text-cyan-300 text-xl">
          <h3 className="text-2xl font-semibold mb-2">Password Strength: {strength.score}</h3>
          <p className="mb-2">Time to Crack: {getCrackTime(strength.crack_times_display)}</p>
          <p className="mb-2">Suggestions:</p>
          <ul className="list-disc list-inside mb-4">
            {strength.feedback.suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
          <p className="text-xl font-bold">Review: {strength.feedback.suggestions.length === 0 ? 'Good Password!' : 'Weak Password!'}</p>
        </div>
      )}
    </div>
  );
};

export default PasswordStrengthChecker;
