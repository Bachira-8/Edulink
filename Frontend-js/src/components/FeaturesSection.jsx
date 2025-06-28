import React from "react";
import "./FeaturesSection.css";

const features = [
  { icon: "📄", title: "Upload & Download Documents", desc: "Share PDFs, Word files, and presentations easily." },
  { icon: "🎓", title: "Faculty-Specific Dashboards", desc: "Custom dashboards for faculty to manage resources." },
  { icon: "📝", title: "Student Assignment Submission", desc: "Students can submit assignments directly." },
  { icon: "🔒", title: "Role-Based Access Control", desc: "Permissions based on user roles for security." },

];

function FeaturesSection() {
  return (
    <section className="features" id="features">
      <div className="features-container">
        <h2>Features</h2>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;