import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PasswordGenerator from "./components/PasswordGenerator";
import PasswordHistory from "./components/PasswordHistory";
import PasswordStrength from "./components/PasswordStrength";
import "./style.css";

function App() {
  const [history, setHistory] = React.useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const addToHistory = (newPassword) => {
    setHistory([newPassword, ...history.slice(0, 4)]);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-cyan-300">
        <header className="flex flex-col md:flex-row justify-between p-4 bg-gray-900">
          <div className="flex items-center justify-between w-full md:w-auto">
            <h1 className="neon-text text-4xl font-bold">Cipher Craft</h1>
            <button
              className="md:hidden text-cyan-300 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <nav
            className={`md:flex md:items-center ${
              isMenuOpen ? "block" : "hidden"
            } md:block`}
          >
            <Link
              to="/"
              className="neon-text text-cyan-300 hover:text-cyan-500 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Generate Password
            </Link>
            <Link
              to="/history"
              className="neon-text text-cyan-300 hover:text-cyan-500 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Password History
            </Link>
            <Link
              to="/strength-checker"
              className="neon-text text-cyan-300 hover:text-cyan-500 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Strength Checker
            </Link>
          </nav>
        </header>
        <main className="flex-grow flex justify-center items-center p-4">
          <Routes>
            <Route
              path="/"
              element={<PasswordGenerator addToHistory={addToHistory} />}
            />
            <Route
              path="/history"
              element={<PasswordHistory history={history} />}
            />
            <Route path="/strength-checker" element={<PasswordStrength />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
