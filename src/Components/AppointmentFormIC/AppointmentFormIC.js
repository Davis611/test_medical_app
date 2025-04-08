import React, { useState } from 'react';
import './AppointmentFormIC.css';

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM'
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!selectedSlot || !appointmentDate) {
      alert('Please select both a date and a time slot.');
      return;
    }

    onSubmit({
      name,
      phoneNumber,
      appointmentDate,
      timeSlot: selectedSlot,
      doctorName,
      doctorSpeciality,
    });

    // Clear form
    setName('');
    setPhoneNumber('');
    setSelectedSlot('');
    setAppointmentDate('');
  };

  return (
    <form onSubmit={handleFormSubmit} className="appointment-form">
      <h2>Book Appointment</h2>
      <p><strong>Dr. {doctorName}</strong> — {doctorSpeciality}</p>

      <div className="form-group">
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="appointmentDate">Date:</label>
        <input
          type="date"
          id="appointmentDate"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Available Time Slots:</label>
        <div className="slots-grid">
          {timeSlots.map((slot) => (
            <button
              type="button"
              key={slot}
              className={`slot-btn ${selectedSlot === slot ? 'selected' : ''}`}
              onClick={() => setSelectedSlot(slot)}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentFormIC;
