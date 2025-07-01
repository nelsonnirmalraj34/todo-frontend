// src/pages/SignIn.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './Auth.css';

const SignIn = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    alert('Sign in successful!');
  };

  return (
    <div className="gradient-bg">
      <div className="signin-card">
        <h2 className="signin-title">Sign In</h2>
        <form className="signin-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="signin-input"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="signin-input"
            value={form.password}
            onChange={handleChange}
            required
          />
          {error && <div className="signin-error">{error}</div>}
          <button type="submit" className="signin-btn">Sign In</button>
        </form>

        <a href="http://localhost:5000/auth/google">
          <button type="button" className="signin-btn google-signin">
            <FcGoogle size={20} /> Sign in with Google
          </button>
        </a>

        <div className="signin-footer">
          Don’t have an account?{' '}
          <Link to="/signup" className="signin-link">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
