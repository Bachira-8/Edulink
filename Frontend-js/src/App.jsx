import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import MaterialsPage from "./pages/MaterialsPage.jsx";
import './App.css'

function App() {

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            
             <Route path="/materials" element={<MaterialsPage />} />
            
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
