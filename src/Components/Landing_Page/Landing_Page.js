import React from "react";
import { Link } from "react-router-dom";
import "./Landing_Page.css";

const Landing_Page = () => {
  return (
    <section className="hero-section">
      <div className="flex-hero">
        <h1>
          Your Health<br />
          <span className="text-gradient">Our Responsibility</span>
        </h1>

        {/* Background blobs */}
        <div className="blob-cont">
          <div className="blue blob"></div>
        </div>
        <div className="blob-cont">
          <div className="blue1 blob"></div>
        </div>

        <h4>
          We provide trusted, professional healthcare support to ensure your well-being is always in good hands.
        </h4>

        <a href="#services">
          <button className="button">Get Started</button>
        </a>
      </div>
    </section>
  );
};

export default Landing_Page;
