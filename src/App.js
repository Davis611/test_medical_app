import './App.css';

import React from 'react';
import AppointmentFormIC from './Components/AppointmentFormIC/AppointmentFormIC';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import InstantConsultation from './Components/Instant-Consultation/InstantConsultation'; // Importing InstantConsultation component

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
