'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUpClick = () => {
    router.push('/pages/signup');
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await axios.post('/api/login', { email, password });
      console.log('Login response:', response.data);

      if (response.data.success) {
        localStorage.setItem('userdetails', JSON.stringify({ name: response.data.user.name, email: response.data.user.email }));
        router.push('/pages/dashboard');
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = error.response?.data?.message || 'Login error: Please try again.';
      setMessage(errorMessage);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back!</h1>
        <p className="login-subtext">Please enter your credentials to continue.</p>

        {message && <p className="message">{message}</p>}

        <form onSubmit={handleLoginSubmit}>
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
          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="signup-link">
          Don’t have an account?{' '}
          <span onClick={handleSignUpClick} className="signup-text">
            Sign Up
          </span>
        </p>
      </div>

      <style jsx>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(135deg, #e0eafc, #cfdef3);
        }

        .login-card {
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

        .login-subtext {
          margin-bottom: 1.5rem;
          color: #666;
          font-size: 1rem;
        }

        .message {
          margin-bottom: 1rem;
          color: #d9534f;
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
  color: #333; /* Change this to your desired text color */
}


        input:focus {
          outline: none;
          border-color: #0070f3;
        }

        .login-btn {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 0.75rem;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s;
        }

        .login-btn:hover {
          background-color: #005bb5;
        }

        .signup-link {
          margin-top: 1rem;
          font-size: 0.9rem;
          color: #555;
        }

        .signup-text {
          color: #0070f3;
          cursor: pointer;
          font-weight: bold;
        }

        .signup-text:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
