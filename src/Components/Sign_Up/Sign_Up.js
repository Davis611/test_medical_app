import React, { useState } from 'react';
import './Sign_Up.css';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {
    // State variables using useState hook
    const [name, setName] = useState(''); // State for Name
    const [email, setEmail] = useState(''); // State for Email
    const [phone, setPhone] = useState(''); // State for Phone
    const [password, setPassword] = useState(''); // State for Password
    const [showErr, setShowErr] = useState(''); // State to show error messages
    const navigate = useNavigate(); // Navigation hook from react-router

    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Basic validation
        if (!name || !email || !phone || !password) {
            setShowErr('Please fill out all fields');
            return;
        }

        // Email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            setShowErr('Please enter a valid email address');
            return;
        }

        // Phone validation (check if it is a 10 digit number)
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            setShowErr('Please enter a valid 10-digit phone number');
            return;
        }

        // Password validation (minimum 6 characters)
        if (password.length < 6) {
            setShowErr('Password must be at least 6 characters long');
            return;
        }

        // Clear any previous error message
        setShowErr('');

        // API Call to register user
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });

        const json = await response.json(); // Parse the response JSON

        if (json.authtoken) {
            // Store user data in session storage
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);

            // Redirect user to home page
            navigate("/");

        } else {
            // Show error messages if the response contains errors
            if (json.errors) {
                setShowErr(json.errors.map(error => error.msg).join(', '));
            } else {
                setShowErr(json.error);
            }
        }
    };

    return (
        <div className="container" style={{ marginTop: '5%' }}>
            <div className="signup-grid">
                <div className="signup-form">
                    <form method="POST" onSubmit={register}>
                        {/* Name Input */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                value={name} 
                                type="text" 
                                onChange={(e) => setName(e.target.value)} 
                                name="name" 
                                id="name" 
                                className="form-control" 
                                placeholder="Enter your name" 
                                required
                            />
                        </div>

                        {/* Email Input */}
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                type="email" 
                                name="email" 
                                id="email" 
                                className="form-control" 
                                placeholder="Enter your email" 
                                required
                            />
                        </div>

                        {/* Phone Input */}
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                                type="tel" 
                                name="phone" 
                                id="phone" 
                                className="form-control" 
                                placeholder="Enter your phone number" 
                                pattern="^\d{10}$" 
                                required
                            />
                        </div>

                        {/* Password Input */}
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                name="password" 
                                id="password" 
                                className="form-control" 
                                placeholder="Enter your password" 
                                type="password" 
                                required 
                                minLength="6"
                            />
                        </div>

                        {/* Error Display */}
                        {showErr && <div className="err" style={{ color: 'red' }}>{showErr}</div>}

                        {/* Submit Button */}
                        <button type="submit" className="btn1">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sign_Up;
