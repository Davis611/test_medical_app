
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';


const Notification = ({ children }) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  
  useEffect(() => {
    
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    
    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    
    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
      setShowNotification(true);
    }
  }, []);

  
  useEffect(() => {
    if (!appointmentData) {
      setShowNotification(false);
    }
  }, [appointmentData]);

  
  return (
    <div>
      {/* Render Navbar component */}
      <Navbar></Navbar>
      {/* Render children components */}
      {children}

      {/* Display appointment notification if user is logged in and notification should be shown */}
      {isLoggedIn && showNotification && appointmentData && (
        <div className="notification-container">
          <div className="notification-content">
            <h3 className="notification-title">Appointment Notification</h3>
            <p><strong>Booked By:</strong> {username}</p>
            <p><strong>Doctor:</strong> {doctorData?.name}</p>
            <p><strong>Date:</strong> {appointmentData.date}</p>
            <p><strong>Time:</strong> {appointmentData.time}</p>
          </div>
        </div>
      )}
    </div>
  );
};


export default Notification;
