'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLoginClick = () => {
    router.push('/pages/Login');
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('/api/signup', { name, email, password });
      setMessage(response.data.message);
      if (response.data.success) {
        router.push('/pages/Login');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Signup error: Please try again.';
      setMessage(errorMessage);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Create Account</h1>
        <p>Fill in the details below to create your account.</p>

        {message && <p className="message">{message}</p>} {/* Display backend message */}

        <form onSubmit={handleSignupSubmit}>
          <div className="input-container">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="input-container">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="input-container">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p className="login-link">
          Already have an account?{' '}
          <span onClick={handleLoginClick} className="login-text">
            Log In
          </span>
        </p>
      </div>

      <style jsx>{`
        .signup-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(135deg, #e0eafc, #cfdef3);
        }

        .signup-box {
          background: white;
          padding: 2.5rem;
          border-radius: 15px;
          box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
          text-align: center;
        }

        h1 {
          margin-bottom: 1rem;
          font-size: 2rem;
          font-weight: bold;
          color: #333;
        }

        p {
          margin-bottom: 1.5rem;
          color: #666;
          font-size: 1rem;
        }

        .message {
          margin-bottom: 1rem;
          color: #d9534f; /* Bootstrap's danger color */
          font-size: 1rem;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .input-container {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        label {
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          color: #555;
        }

        input {
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
          color: #000; /* Set text color to black */
        }

        input:focus {
          outline: none;
          border-color: #0070f3;
          box-shadow: 0 0 5px rgba(0, 118, 255, 0.3);
        }

        .signup-btn {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 0.75rem;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s, transform 0.2s;
        }

        .signup-btn:hover {
          background-color: #005bb5;
          transform: translateY(-2px);
        }

        .login-link {
          margin-top: 1rem;
          font-size: 0.9rem;
          color: #555;
        }

        .login-text {
          color: #0070f3;
          cursor: pointer;
          font-weight: bold;
        }

        .login-text:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
