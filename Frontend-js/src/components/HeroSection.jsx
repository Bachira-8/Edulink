import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
   const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Seamless Document Sharing Between Students and Faculty</h1>
          <p>
            Edullink simplifies academic file sharing, making it easy for students and faculty to upload, download, and manage documents securely and efficiently.
          </p>
          <div className="hero-actions">
            <button 
              onClick={() => navigate('/materials')} 
              className="hero-btn hero-btn-primary"
            >
              Get Started
            </button>
            <a href="#features" className="hero-btn">Learn More</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="../Heroimage.svg" alt="Education Illustration" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
