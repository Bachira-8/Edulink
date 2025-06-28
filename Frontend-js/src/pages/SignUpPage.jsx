import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUpPage.css";

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Student");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    alert("Account created!");
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Create an Account</h2>
        {error && <div className="signup-error">{error}</div>}
        <div className="signup-field">
          <label>Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="signup-field">
          <label>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="signup-field">
          <label>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <div className="signup-field">
          <label>Confirm Password</label>
          <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
        </div>
        <div className="signup-field">
          <label>Role</label>
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
          </select>
        </div>
        <button type="submit" className="signup-btn">Create Account</button>
        <div className="signup-switch">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;