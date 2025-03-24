import React from 'react';
import './Login.css'; 


const Login = () => {
  return (
    <div>
      {/* Main container div for the page content */}
      <div className="container">
        {/* Login Grid Layout */}
        <section className="login-grid">
          {/* Login Heading */}
          <header className="login-text">
            <h2>Login</h2>
          </header>

          {/* Signup Link */}
          <div className="login-text">
            Are you a new member?{' '}
            <span>
              <a href="../Sign_Up/Sign_Up.html" className="signup-link">
                Sign Up Here
              </a>
            </span>
          </div>

          <br />

          {/* Login Form */}
          <div className="login-form">
            <form action="#" method="POST">
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                  aria-describedby="emailHelp"
                />
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  required
                  aria-describedby="passwordHelp"
                />
              </div>

              {/* Buttons Group */}
              <div className="btn-group">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <button type="reset" className="btn btn-danger">
                  Reset
                </button>
              </div>

              <br />

              {/* Forgot Password Link */}
              <div className="login-text">
                <a href="#" className="forgot-password">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;