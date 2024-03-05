import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [coverimage, setCoverimage] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
      
        // Check if avatar file is selected
        if (!avatar) {
          setError('Avatar file is required');
          setLoading(false);
          return;
        }
      
        console.log("avatar available"); // Log before setting state
      
        try {
          const formData = new FormData();
          formData.append('username', username);
          formData.append('email', email);
          formData.append('fullname', fullname);
          formData.append('password', password);
          formData.append('avatar', avatar); // Assuming `avatar` is set correctly
          formData.append('coverimage', coverimage);
      
          console.log('Form Data:', formData); // Log `formData` after adding values
      
          const response = await axios.post('http://localhost:5000/api/v1/users/register',formData, {
              headers: {
                "Content-Type" : 'application/json'
              }
          });
          
          console.log('Server Response:', response.data);
          
          if (response.status === 200) {
              console.log('User registered successfully!');
          } else {
              setError('Registration failed. Please try again.');
          }
        } catch (error) {
          console.error('Error registering user:', error);
          setError('Registration failed. Please try again later.');
        }
      
        setLoading(false);
      };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto" encType="multipart/form-data">
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                    <label className="block text-gray-700">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-input mt-1 block w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input mt-1 block w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Full Name</label>
                    <input
                        type="text"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
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
                <div className="mb-4">
                    <label className="block text-gray-700">Avatar</label>
                    <input
                        type="file"
                        onChange={(e) => setAvatar(e.target.files[0])}
                        className="form-input mt-1 block w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Cover image</label>
                    <input
                        type="file"
                        onChange={(e) => setCoverimage(e.target.files[0])}
                        className="form-input mt-1 block w-full"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    disabled={loading}
                >
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
    );
};

export default Register;
