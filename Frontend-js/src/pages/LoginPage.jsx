import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    alert("Logged in!");
    navigate("/");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login to Edullink</h2>
        {error && <div className="login-error">{error}</div>}
        <div className="login-field">
          <label>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="login-field">
          <label>Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <div className="login-forgot">
          <Link to="#">Forgot password?</Link>
        </div>
        <button type="submit" className="login-btn">Login</button>
        <div className="login-switch">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;