import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PasswordGenerator from './components/PasswordGenerator';
import PasswordHistory from './components/PasswordHistory';
import PasswordStrength from './components/PasswordStrength'; 
import './style.css';

function App() {
  const [history, setHistory] = React.useState([]);

  const addToHistory = (newPassword) => {
    setHistory([newPassword, ...history.slice(0, 4)]);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-cyan-300">
        <header className="flex justify-between p-4 bg-gray-900">
          <h1 className="text-3xl font-bold">Password Generator</h1>
          <nav>
            <Link to="/" className="text-cyan-300 hover:text-cyan-500 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">Home</Link>
            <Link to="/history" className="text-cyan-300 hover:text-cyan-500 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">History</Link>
            <Link to="/strength-checker" className="text-cyan-300 hover:text-cyan-500 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">Strength Checker</Link>
          </nav>
        </header>
        <main className="flex-grow flex justify-center items-center">
          <Routes>
            <Route path="/" element={<PasswordGenerator addToHistory={addToHistory} />} />
            <Route path="/history" element={<PasswordHistory history={history} />} />
            <Route path="/strength-checker" element={<PasswordStrength />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
