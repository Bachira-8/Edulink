import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Edullink. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;