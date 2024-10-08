import React from 'react';

const PasswordHistory = ({ history }) => {

    const exportAsCSV = () => {
        const csvContent = "data:text/csv;charset=utf-8," +
            history.map(p => `"${p}"`).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "password_history.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const exportAsJSON = () => {
        const jsonContent = JSON.stringify(history, null, 2);
        const blob = new Blob([jsonContent], { type: "application/json" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "password_history.json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-xl neon-box">
            <h2 className="text-3xl font-bold mb-6 text-center text-cyan-300">Password History</h2>
            <div className="mb-6 flex justify-center gap-4">
                <button
                    onClick={exportAsCSV}
                    className="py-2 px-4 rounded-md bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-orange-500 hover:to-yellow-500 text-white font-extrabold transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-500 animate-glow"
                >
                    Export as CSV
                </button>
                <button
                    onClick={exportAsJSON}
                    className="py-2 px-4 rounded-md bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 text-white font-extrabold transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-500 animate-glow"
                >
                    Export as JSON
                </button>
            </div>
            <ul className="space-y-4">
                {history.length > 0 ? (
                    history.map((password, index) => (
                        <li key={index} className="p-4 bg-gray-800 rounded-lg border border-cyan-500 shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-700">
                            <p className="text-cyan-300 text-xl">{password}</p>
                        </li>
                    ))
                ) : (
                    <li className="p-4 bg-gray-800 rounded-lg border border-cyan-500 shadow-lg">
                        <p className="text-cyan-300 text-xl">No passwords generated yet.</p>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default PasswordHistory;
