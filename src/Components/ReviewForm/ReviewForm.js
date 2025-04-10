// src/components/ReviewForm/ReviewForm.js

import React, { useState } from 'react';
import './ReviewForm.css'; // Importing the CSS for styling

// Define the ReviewForm component
const ReviewForm = ({ doctorName, consultationDate }) => {
  // State to manage review input, rating, user name, and form visibility
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [userName, setUserName] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Handle review text change
  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  // Handle rating change
  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  // Handle user name change
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  // Toggle form visibility
  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbackData = {
      userName,
      review,
      rating,
      doctorName,
      consultationDate,
    };
    console.log('Feedback submitted:', feedbackData);

    // Reset form after submission
    setUserName('');
    setReview('');
    setRating(0);
    setShowForm(false);
  };

  return (
    <div className="review-form-container">
      <h2>Provide Your Feedback</h2>
      
      {/* Display consultation details */}
      <div className="consultation-details">
        <p><strong>Doctor:</strong> {doctorName}</p>
        <p><strong>Consultation Date:</strong> {consultationDate}</p>
      </div>

      {/* Button to toggle visibility of the feedback form */}
      <button className="feedback-button" onClick={toggleFormVisibility}>
        {showForm ? 'Hide Feedback Form' : 'Click Here to Provide Feedback'}
      </button>

      {/* Conditionally render the feedback form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="review-form">
          <div className="form-group">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={handleUserNameChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="review">Your Review</label>
            <textarea
              id="review"
              value={review}
              onChange={handleReviewChange}
              placeholder="Write your feedback here..."
              rows="5"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating (1-5)</label>
            <input
              type="number"
              id="rating"
              value={rating}
              onChange={handleRatingChange}
              min="1"
              max="5"
              required
            />
          </div>

          <button type="submit" className="submit-button">Submit Feedback</button>
        </form>
      )}
    </div>
  );
};

export default ReviewForm;
