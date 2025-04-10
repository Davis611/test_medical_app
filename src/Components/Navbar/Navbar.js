import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom'; // Using React Router's Link for navigation

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState(''); // State to hold the extracted user name
    const navigate = useNavigate();

    useEffect(() => {
        // Check if auth-token exists in sessionStorage to set login state
        const token = sessionStorage.getItem('auth-token');
        if (token) {
            setIsLoggedIn(true); // Set the user as logged in

            // Get user email from sessionStorage and extract the name
            const email = sessionStorage.getItem('email');
            if (email) {
                // Extract name before the '@' symbol in the email
                const name = email.split('@')[0];
                setUserName(name); // Set the extracted name
            }
        }
    }, []);

    const handleLogout = () => {
        // Clear session storage on logout
        sessionStorage.removeItem('auth-token');
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('phone');
        sessionStorage.removeItem('email');
        setIsLoggedIn(false); // Update login state
        navigate('/'); // Redirect user to home page
    };

    return (
        <div className="navbar">
            <nav>
                <div className="nav-logo">
                    <Link to="/" aria-label="Home">
                        Doctor Connect
                        {/* Add SVG or Icon here */}
                    </Link>
                </div>

                <ul className="nav__links">
                    <li className="link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="link">
                        <Link to="/appointments">Appointments</Link>
                    </li>
                    
                    <li className="link">
                        <Link to="/instant-consultation">
                            <button>Instant Booking Consultation</button>
                        </Link>
                    </li>

                    {/* Conditionally render the Review Link if user is logged in */}
                    {isLoggedIn && (
                        <li className="link">
                            <Link to="/review">Provide Feedback</Link> {/* Review Link */}
                        </li>
                    )}

                    {/* Conditionally render Sign Up and Login or Logout based on the login state */}
                    {isLoggedIn ? (
                        <li className="link">
                            <span className="user-name">{userName}</span> {/* Display the user's name */}
                            <button onClick={handleLogout} className="btn1">Logout</button>
                        </li>
                    ) : (
                        <>
                            <li className="link">
                                <Link to="/signup" className="btn1">Sign Up</Link>
                            </li>
                            <li className="link">
                                <Link to="/login" className="btn1">Login</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
