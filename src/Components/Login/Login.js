import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages
  const navigate = useNavigate();

  // Check if user is already authenticated and redirect if true
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/");
    }
  }, [navigate]);

  // Function to handle login form submission
  const login = async (e) => {
    e.preventDefault();

    // Reset error message before submitting
    setErrorMessage('');

    try {
      // Send login request
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const json = await res.json();

      if (json.authtoken) {
        // Store auth-token and user email in session storage
        sessionStorage.setItem('auth-token', json.authtoken);
        sessionStorage.setItem('email', email);

        // Redirect to home page and reload
        navigate('/');
        window.location.reload();
      } else {
        // Handle errors if authentication fails
        if (json.errors) {
          setErrorMessage(json.errors.map(error => error.msg).join(', ')); // Show all error messages
        } else {
          setErrorMessage(json.error || 'Something went wrong. Please try again.');
        }
      }
    } catch (err) {
      setErrorMessage('Error connecting to the server. Please try again.');
    }
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <div className="login-grid">
        <div className="login-text">
          <h2>Login</h2>
        </div>
        <div className="login-text">
          Are you a new member? 
          <span>
            <Link to="/signup" style={{ color: '#2190FF' }}>
              Sign Up Here
            </Link>
          </span>
        </div>
        <br />
        <div className="login-form">
          <form onSubmit={login}>
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

            {/* Error message */}
            {errorMessage && (
              <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>
                {errorMessage}
              </div>
            )}

            {/* Submit button */}
            <div className="btn-group">
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
