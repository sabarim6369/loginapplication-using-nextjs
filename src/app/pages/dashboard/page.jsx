'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userdetails'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>
      {user.name ? (
        <div className="user-info">
          <h2>Name: {user.name}</h2>
          <h3>Email: {user.email}</h3>
        </div>
      ) : (
        <p className="no-user">No user information found. Please log in.</p>
      )}

      <style jsx>{`
        .dashboard-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: linear-gradient(135deg, #f0f4c3, #e8f5e9);
          text-align: center;
          padding: 20px;
          font-family: 'Arial', sans-serif;
        }

        h1 {
          color: #2e7d32;
          margin-bottom: 2rem;
          font-size: 2.5rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }

        .user-info {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s;
        }

        .user-info:hover {
          transform: scale(1.02);
        }

        h2 {
          color: #1976d2;
          margin: 0;
        }

        h3 {
          color: #555;
          margin: 0;
        }

        .no-user {
          color: #d32f2f;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
}
