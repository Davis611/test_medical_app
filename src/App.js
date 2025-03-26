import logo from './logo.svg';
import './App.css';

import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import AppointmentFormIC from './Components/AppointmentFormIC/AppointmentFormIC';
import InstantConsultation from './Components/Instant-Consultation/InstantConsultation'; // Importing InstantConsultation component
import FindDoctorSearchIC from './Components/FindDoctorSearch/FindDoctorSearchIC';
import DoctorCardIC from './Components/DoctorCard/DoctorCardIC';

function App() {
  <>
    </>
  return (

    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
          {/* Set up the Routes for different pages */}
          <Routes>
          
          <Route path="/Instant-consultation" element={<InstantConsultation />} />
            {/* Define individual Route components for different pages */}
          </Routes>
        </BrowserRouter>
    </div>
  );
};




export default App;
