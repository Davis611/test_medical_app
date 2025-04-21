import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('auth-token');
        if (token) {
            setIsLoggedIn(true);
            const email = sessionStorage.getItem('email');
            if (email) {
                const name = email.split('@')[0];
                setUserName(name);
            }
        }
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem('auth-token');
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('phone');
        sessionStorage.removeItem('email');
        setIsLoggedIn(false);
        navigate('/');
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const devLogin = () => {
        sessionStorage.setItem('auth-token', 'mocktoken123');
        sessionStorage.setItem('email', 'testuser@example.com');
        sessionStorage.setItem('name', 'Test User');
        sessionStorage.setItem('phone', '1234567890');
        window.location.reload(); // Refresh to trigger login state
      };
      

    return (
        <div className="navbar">
            <nav>
                <div className="nav-logo">
                    <Link to="/" aria-label="Home">
                        Doctor Connect
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
                    {isLoggedIn && (
                        <li className="link">
                            <Link to="/review">Provide Feedback</Link>
                        </li>
                    )}

                    {isLoggedIn ? (
                        <li className="link profile-dropdown" onClick={toggleDropdown}>
                            <span className="user-name">{userName} &#9662;</span>
                            {showDropdown && (
                                <div className="dropdown-menu">
                                    <Link to="/profile">Profile</Link>
                                    <Link to="/reports">Your Reports</Link> 
                                    <button onClick={handleLogout}>Logout</button>
                                </div>
                            )}
                        </li>
                    ) : (
                        <>
                            <li className="link">
                                <Link to="/signup" className="btn1">Sign Up</Link>
                            </li>
                            <li className="link">
                                <Link to="/login" className="btn1">Login</Link>
                            </li>
                            <button onClick={devLogin}>Dev Login</button>

                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
