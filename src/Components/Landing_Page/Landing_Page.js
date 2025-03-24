import React, { useEffect } from 'react';
import './Landing_Page.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Landing_Page = () => {
  useEffect(() => {
    // Initialize AOS animation when the component mounts
    const AOS = require('aos');
    AOS.init();
  }, []);

  return (
    <main className="hero-section">
      <div className="container">
        {/* Hero Section Content */}
        <div data-aos="fade-up" className="flex-hero">
          {/* Main Heading */}
          <h1>
            Your Health
            <br />
            <span className="text-gradient">Our Responsibility</span>
          </h1>

          {/* Animated Blob Containers */}
          <div className="blob-cont">
            <div className="blue blob"></div>
          </div>
          <div className="blob-cont">
            <div className="blue1 blob"></div>
          </div>

          {/* Subheading Text */}
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque at
            quae ducimus. Suscipit omnis quibusdam non cum rem voluptatem!
          </h4>

          {/* Call to Action Button */}
          <a href="#services" aria-label="Explore our services">
            <button className="button">Get Started</button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Landing_Page;
