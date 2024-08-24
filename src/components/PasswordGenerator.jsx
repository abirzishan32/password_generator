import React from 'react';
import ReactSwitch from 'react-switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

const PasswordGenerator = ({ addToHistory }) => {
    const [password, setPassword] = React.useState("");
    const [length, setLength] = React.useState(8);
    const [uppercase, setUppercase] = React.useState(true);
    const [numbers, setNumbers] = React.useState(true);
    const [specialChars, setSpecialChars] = React.useState(true);
    const [pronounceable, setPronounceable] = React.useState(false);
    const [position, setPosition] = React.useState("end");
    const [copied, setCopied] = React.useState(false);

    const consonants = "bcdfghjklmnpqrstvwxyz";
    const vowels = "aeiou";
    const nums = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    const generatePassword = () => {
        let generatePass = '';
    
        if (pronounceable) {

            for (let i = 0; i < length - 4; i += 2) {
                const consonant = consonants[Math.floor(Math.random() * consonants.length)];
                const vowel = vowels[Math.floor(Math.random() * vowels.length)];
                generatePass += consonant + vowel;
            }
    
            let extraChars = '';
            if (numbers) extraChars += nums[Math.floor(Math.random() * nums.length)];
            if (specialChars) extraChars += symbols[Math.floor(Math.random() * symbols.length)];
    
            generatePass = position === 'start' ? extraChars + generatePass : generatePass + extraChars;
    

            if (generatePass.length < length) {
                const remainingLength = length - generatePass.length;
                const availableChars = (numbers ? nums : '') + (specialChars ? symbols : '');
                for (let i = 0; i < remainingLength; i++) {
                    generatePass += availableChars[Math.floor(Math.random() * availableChars.length)];
                }
            } else if (generatePass.length > length) {
                generatePass = generatePass.slice(0, length);
            }
        } else {
            const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const lower = 'abcdefghijklmnopqrstuvwxyz';
    
            let validChars = lower;
    
            if (uppercase) validChars += upper;
            if (numbers) validChars += nums;
            if (specialChars) validChars += symbols;
    
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * validChars.length);
                generatePass += validChars[randomIndex];
            }
        }
    
        setPassword(generatePass);
        addToHistory(generatePass);
    };
    


    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    return (

        <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-xl neon-box transform hover:scale-105 transition-transform duration-300 animate-pulse grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="flex flex-col mb-6">
                <label className="block text-xl font-bold mb-2 tracking-wide neon-label">Password Length:</label>
                <input
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                    type="number"
                    className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-4 focus:ring-cyan-500 transition-shadow duration-300 glow-input"
                    min="4" max="32"
                />
            </div>

            <div className="flex flex-col mb-6">
                <label className="block text-xl font-bold mb-2 tracking-wide neon-label">Include Uppercase:</label>
                <ReactSwitch
                    checked={uppercase}
                    onChange={() => setUppercase(!uppercase)}
                    height={28}
                    width={56}
                    handleDiameter={28}
                    offColor="#2D3748"
                    onColor="#38B2AC"
                    disabled={pronounceable} 
                />
            </div>

            <div className="flex flex-col mb-6">
                <label className="block text-xl font-bold mb-2 tracking-wide neon-label">Include Numbers:</label>
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

            <div className="flex flex-col mb-6">
                <label className="block text-xl font-bold mb-2 tracking-wide neon-label">Include Special Characters:</label>
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

            <div className="flex flex-col mb-6">
                <label className="block text-xl font-bold mb-2 tracking-wide neon-label">Pronounceable Password:</label>
                <ReactSwitch
                    checked={pronounceable}
                    onChange={() => setPronounceable(!pronounceable)}
                    height={28}
                    width={56}
                    handleDiameter={28}
                    offColor="#2D3748"
                    onColor="#38B2AC"
                />
            </div>

            {pronounceable && (
                <div className="flex flex-col mb-6">
                    <label className="block text-xl font-bold mb-2 tracking-wide neon-label">Position of Numbers/Chars:</label>
                    <select
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-4 focus:ring-cyan-500 transition-shadow duration-300 glow-input"
                    >
                        <option value="start">Start</option>
                        <option value="end">End</option>
                    </select>
                </div>
            )}

            <div className="col-span-2">
                <button
                    onClick={generatePassword}
                    className="w-full py-3 px-6 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-extrabold transition-all transform hover:scale-100 focus:outline-none focus:ring-4 focus:ring-cyan-500 animate-glow hover:animate-shake"
                >
                    Generate Password
                </button>
            </div>

            {password && (
                <div className="relative col-span-2 mt-6 p-4 rounded-md border-4 border-cyan-500 bg-gray-800 text-cyan-300 text-center text-2xl font-bold shadow-lg neon-text">
                    <p className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent animate-glow">
                        {password}
                    </p>
                    <FontAwesomeIcon
                        icon={faClipboard}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cyan-300 cursor-pointer hover:text-cyan-500 transition-all hover:scale-110"
                        onClick={copyToClipboard}
                        title="Copy to Clipboard"
                    />
                    {copied && <div className="copied-message">Copied!</div>}
                </div>
            )}
        </div>

    );
    
};

export default PasswordGenerator;
