import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/v1/users/dashboard');
                setUserData(response.data.slice(0, 5)); // Limit to first 5 users
            } catch (error) {
                setError(error.message);
            }
        };

        fetchDashboardData();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            {error && <p className="text-red-500">Error: {error}</p>}
            <div className="flex flex-col">
                {userData.map(user => (
                    <div key={user._id} className="bg-white rounded-lg shadow-md w-60 h-150 p-4 flex flex-col items-center">
                        <img src={user.avatar} alt="Avatar" className="w-12 h-12 rounded-full mb-2" />
                        <div>
                            <p className="text-lg font-semibold">{user.username}</p>
                            <p className="text-gray-600">{user.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
