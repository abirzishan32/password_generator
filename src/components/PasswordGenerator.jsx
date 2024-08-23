import React, { useState } from 'react';
import ReactSwitch from 'react-switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

const PasswordGenerator = () => {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8);
    const [uppercase, setUppercase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [specialChars, setSpecialChars] = useState(true);
    const [strength, setStrength] = useState("");
    const [copied, setCopied] = useState(false);

    const calculateStrength = (generatedPassword) => {
        let strengthLevel = 0;

        if (generatedPassword.length >= 8) strengthLevel++;
        if (/[A-Z]/.test(generatedPassword)) strengthLevel++;
        if (/[0-9]/.test(generatedPassword)) strengthLevel++;
        if (/[^a-zA-Z0-9]/.test(generatedPassword)) strengthLevel++;

        if (strengthLevel <= 1) setStrength("Weak");
        else if (strengthLevel === 2) setStrength("Medium");
        else if (strengthLevel >= 3) setStrength("Strong");
    };

    const generatePassword = () => {
        const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lower = 'abcdefghijklmnopqrstuvwxyz';
        const nums = '0123456789';
        const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        let validChars = lower;

        if (uppercase) validChars += upper;
        if (numbers) validChars += nums;
        if (specialChars) validChars += symbols;

        let generatePass = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * validChars.length);
            generatePass += validChars[randomIndex];
        }

        setPassword(generatePass);
        calculateStrength(generatePass);
        setCopied(false); // Reset the copied state after generating a new password
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Hide the message after 2 seconds
    };

    return (
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-xl neon-box transform hover:scale-105 transition-transform duration-300 animate-pulse">
            <div className="mb-6">
                <label className="block text-xl font-bold mb-2 tracking-wide neon-label">Password Length:</label>
                <input
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                    type="number"
                    className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-4 focus:ring-cyan-500 transition-shadow duration-300 glow-input"
                    min="4" max="32"
                />
            </div>

            <div className="mb-6 flex items-center justify-between">
                <label className="text-xl font-bold tracking-wide neon-label">Include Uppercase:</label>
                <ReactSwitch
                    checked={uppercase}
                    onChange={() => setUppercase(!uppercase)}
                    height={28}
                    width={56}
                    handleDiameter={28}
                    offColor="#2D3748"
                    onColor="#38B2AC"
                />
            </div>

            <div className="mb-6 flex items-center justify-between">
                <label className="text-xl font-bold tracking-wide neon-label">Include Numbers:</label>
                <ReactSwitch
                    checked={numbers}
                    onChange={() => setNumbers(!numbers)}
                    height={28}
                    width={56}
                    handleDiameter={28}
                    offColor="#2D3748"
                    onColor="#38B2AC"
                />
            </div>

            <div className="mb-6 flex items-center justify-between">
                <label className="text-xl font-bold tracking-wide neon-label">Include Special Characters:</label>
                <ReactSwitch
                    checked={specialChars}
                    onChange={() => setSpecialChars(!specialChars)}
                    height={28}
                    width={56}
                    handleDiameter={28}
                    offColor="#2D3748"
                    onColor="#38B2AC"
                />
            </div>

            <button
                onClick={generatePassword}
                className="w-full py-3 px-6 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-extrabold transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-500 animate-glow hover:animate-shake"
            >
                Generate Password
            </button>

            {password && (
                <div className="mt-6 p-4 rounded-md border-4 border-cyan-500 bg-gray-800 text-cyan-300 text-center text-2xl font-bold shadow-lg neon-text">
                    <p className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent animate-glow">{password}
                        <FontAwesomeIcon
                            icon={faClipboard}
                            className="text-cyan-300 cursor-pointer hover:text-cyan-500 ml-20 transition-all transform hover:scale-110"
                            onClick={copyToClipboard}
                            title="Copy to Clipboard"
                        />
                    </p>

                </div>
            )}





            {copied && (
                <div className="mt-2 text-cyan-300 font-bold text-center animate-bounce">
                    Copied!
                </div>
            )}
        </div>
    );
};

export default PasswordGenerator;
