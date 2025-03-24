import React, { useState } from 'react';
import './Sign_Up.css';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

// Sign Up Component
const Sign_Up = () => {
    // State variables using useState hook
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showerr, setShowerr] = useState(''); // State to show error messages
    const [loading, setLoading] = useState(false); // Loading state for submit button
    const navigate = useNavigate(); // Navigation hook from react-router

    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Client-side validation
        if (password !== confirmPassword) {
            setShowerr("Passwords do not match!");
            return;
        }

        if (!name || !email || !phone || !password || !confirmPassword) {
            setShowerr("Please fill all fields.");
            return;
        }

        // Clear error before submitting
        setShowerr('');

        // Set loading state
        setLoading(true);

        // API Call to register user
        try {
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
                    setShowerr(json.errors.map((err) => err.msg).join(", "));
                } else {
                    setShowerr(json.error);
                }
            }
        } catch (error) {
            setShowerr("An error occurred. Please try again later.");
        } finally {
            // Reset loading state after the API call
            setLoading(false);
        }
    };

    // JSX to render the Sign Up form
    return (
        <div className="container" style={{ marginTop: '5%' }}>
            <div className="signup-grid">
                <div className="signup-form">
                    <form method="POST" onSubmit={register}>
                        {/* Name input field */}
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        {/* Email input field */}
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

                        {/* Phone input field */}
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
                                pattern="^\+?[0-9]{10,13}$"
                                required
                            />
                        </div>

                        {/* Password input field */}
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
                            />
                        </div>

                        {/* Confirm Password input field */}
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                className="form-control"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>

                        {/* Display error messages */}
                        {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}

                        {/* Submit button */}
                        <div className="btn-group">
                            <button
                                type="submit"
                                className="btn btn-primary mb-2 waves-effect waves-light"
                                disabled={loading}
                            >
                                {loading ? "Registering..." : "Submit"}
                            </button>
                            <button
                                type="reset"
                                className="btn btn-danger mb-2 waves-effect waves-light"
                            >
                                Reset
                            </button>
                        </div>
                    </form>

                    {/* Sign Up Link */}
                    <div className="signup-text1">
                        Already a member?{' '}
                        <Link to="/login" className="signup-link">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sign_Up;
