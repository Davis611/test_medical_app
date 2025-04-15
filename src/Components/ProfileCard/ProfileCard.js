import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, email, phone, imageUrl }) => {
  return (
    <div className="profile-card">
      {/* Profile Image */}
      <div className="profile-image">
        <img
          src={imageUrl || 'https://via.placeholder.com/100'} // Placeholder if no image provided
          alt={`${name}'s profile`}
        />
      </div>

      {/* User Info */}
      <div className="profile-details">
        <h2>{name}</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
