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
    const [showerr, setShowerr] = useState(''); // State to show error messages
    const navigate = useNavigate(); // Navigation hook from react-router

    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission

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
            window.location.reload(); // Refresh the page
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg); // Show error messages
                }
            } else {
                setShowerr(json.error);
            }
        }
    };

    // JSX to render the Sign Up form
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
        aria-describedby="nameHelp"
    />
    <small id="nameHelp" className="form-text text-muted">
        Please enter your full name.
    </small>
</div>

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
        aria-describedby="phoneHelp"
    />
    <small id="phoneHelp" className="form-text text-muted">
        Please enter a 10-digit phone number (e.g., 123-456-7890).
    </small>
</div>

<div className="form-group">
    <label htmlFor="password">Password</label>
    <input 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        type="password" 
        name="password" 
        id="password" 
        className="form-control" 
        placeholder="Enter your password" 
        required 
        minLength="6" 
        aria-describedby="passwordHelp"
    />
    <small id="passwordHelp" className="form-text text-muted">
        Your password must be at least 6 characters long.
    </small>
</div>

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
                                aria-describedby="helpId" 
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
                                aria-describedby="helpId" 
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
                                aria-describedby="helpId" 
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
                                aria-describedby="helpId" 
                                type="password"
                            />
                        </div>

                        {/* Error Display */}
                        {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}

                        {/* Submit Button */}
                        <button type="submit" className="btn1">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sign_Up;
