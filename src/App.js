import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Navbar from './Components/Navbar/Navbar';
import InstantConsultation from './Components/Instant-Consultation/InstantConsultation'; // Importing InstantConsultation component
import Login from './Components/Login/Login';
import Notification from './Components/Notification/Notification';
function App() {
  return (
    <div className="App">
      {/* Set up BrowserRouter for routing */}
      <BrowserRouter>
        {/* Display the Navbar component */}
        <Navbar />
        
        {/* Set up the Routes for different pages */}
        <Routes>
          <Route path="/Instant-consultation" element={<InstantConsultation />} />
          <Route path='/Sign_Up' element={<Sign_Up />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Notification' element={<Notification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
