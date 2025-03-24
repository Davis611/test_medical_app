import React from 'react';
import './Landing_Page.css';
import Landing_page from './components/Landing_Page/Landing_page.html';
const Landing_Page = () => {
    return (
      <main className="hero-section">
        <section>
          <div>
            {/* AOS animation attribute applied here */}
            <div data-aos="fade-up" className="flex-hero">
              <h1>
                Your Health
                <br />
                <span className="text-gradient">
                  Our Responsibility
                </span>
              </h1>
              <div className="blob-cont">
                <div className="blue blob"></div>
              </div>
              <div className="blob-cont">
                <div className="blue1 blob"></div>
              </div>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque at
                quae ducimus. Suscipit omnis quibusdam non cum rem voluptatem!
              </h4>
              <a href="#services" aria-label="Explore services">
                <button className="button">Get Started</button>
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  };

export default Landing_Page;