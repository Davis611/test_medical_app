import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [updatedDetails, setUpdatedDetails] = useState({});
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authtoken = sessionStorage.getItem("auth-token");
    if (!authtoken) {
      navigate("/login");
    } else {
      fetchUserProfile();
    }
  }, [navigate]);

  const fetchUserProfile = async () => {
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email");

      const response = await fetch(`${API_URL}/api/auth/user`, {
        headers: {
          Authorization: `Bearer ${authtoken}`,
          Email: email
        }
      });

      if (response.ok) {
        const user = await response.json();
        setUserDetails(user);
        setUpdatedDetails(user);
      } else {
        throw new Error("Failed to fetch user profile");
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    setUpdatedDetails(userDetails); // Revert changes
  };

  const handleInputChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email");

      const response = await fetch(`${API_URL}/api/auth/user`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authtoken}`,
          "Content-Type": "application/json",
          Email: email
        },
        body: JSON.stringify(updatedDetails)
      });

      if (response.ok) {
        sessionStorage.setItem("name", updatedDetails.name);
        sessionStorage.setItem("phone", updatedDetails.phone);
        setUserDetails(updatedDetails);
        setEditMode(false);
        alert("Profile updated successfully!");
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="profile-card">
  {userDetails.name ? (
    editMode ? (
      <form onSubmit={handleSubmit}>
        <div className="avatar-container">
          <img
            className="avatar"
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              updatedDetails.name || "User"
            )}&background=0D8ABC&color=fff`}
            alt="User Avatar"
          />
        </div>

        <label>
          Name:
          <input
            type="text"
            name="name"
            value={updatedDetails.name}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={updatedDetails.phone}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={updatedDetails.email}
            disabled
          />
        </label>

        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    ) : (
      <div>
        <div className="avatar-container">
          <img
            className="avatar"
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              userDetails.name || "User"
            )}&background=0D8ABC&color=fff`}
            alt="User Avatar"
          />
        </div>
        <h2>Welcome, {userDetails.name}</h2>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>Phone:</strong> {userDetails.phone}</p>
        <button onClick={handleEdit}>Edit Profile</button>
      </div>
    )
  ) : (
    <p>Loading profile...</p>
  )}
</div>

  );
};

export default ProfileCard;
