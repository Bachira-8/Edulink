import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import AboutSection from "../components/AboutSection";

function HomePage() {
  return (
    <>
    <div id="home">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      </div>
    </>
  );
}

export default HomePage;