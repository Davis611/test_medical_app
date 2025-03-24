import React from 'react';
import './Sign_Up.css'; 

const Sign_Up = () => {
  return (
    <div>
      <section className="container">
        <div className="signup-grid">
          {/* Sign-up form header */}
          <div className="signup-text">
            <h1>Sign Up</h1>
          </div>
        </div>
        
        {/* Link to login page for existing users */}
        <div className="signup-text1">
          Already a member?{' '}
          <span>
            <a href="../Login/Login.html" className="signup-link">
              Login
            </a>
          </span>
        </div>
        
        {/* Sign-up form */}
        <article className="signup-form">
          <form action="#" method="POST" aria-labelledby="signup-form">
            
            {/* Name input field */}
            <div className="form-group">
              <label htmlFor="name" aria-label="Enter your name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="form-control"
                placeholder="Enter your name"
              />
            </div>

            {/* Phone input field */}
            <div className="form-group">
              <label htmlFor="phone" aria-label="Enter your phone number">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                className="form-control"
                placeholder="Enter your phone number"
                pattern="^\+?[0-9]{10,13}$"
              />
            </div>

            {/* Email input field */}
            <div className="form-group">
              <label htmlFor="email" aria-label="Enter your email address">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            {/* Password input field */}
            <div className="form-group">
              <label htmlFor="password" aria-label="Enter your password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="form-control"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit and Reset buttons */}
            <div className="btn-group">
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Submit
              </button>
              <button
                type="reset"
                className="btn btn-danger mb-2 waves-effect waves-light"
              >
                Reset
              </button>
            </div>
          </form>
        </article>
      </section>
    </div>
  );
};

export default Sign_Up;
