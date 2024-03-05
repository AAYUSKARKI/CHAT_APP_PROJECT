import React, { useState } from 'react';

const Login = () => {
    // State variables to hold form data
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/v1/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    usernameOrEmail,
                    password,
                }),
            });
    
            if (response.ok) {
                console.log('User logged in successfully!');
            } else {
                if (response.status === 404) {
                    console.error('Login endpoint not found. Check server configuration.');
                } else {
                    const errorData = await response.json();
                    console.error('Login failed:', errorData.message);
                }
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700">Username or Email</label>
                    <input
                        type="text"
                        value={usernameOrEmail}
                        onChange={(e) => setUsernameOrEmail(e.target.value)}
                        className="form-input mt-1 block w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input mt-1 block w-full"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
