'use client';
import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <h1>Your Logo</h1>
        </div>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/pages/signup">Sign Up</Link></li>
          <li><Link href="/pages/Login">Login</Link></li>
        </ul>
      </nav>

      <style jsx>{`
        header {
          background: linear-gradient(135deg, #e0eafc, #cfdef3);
          color: #333;
          padding: 20px;
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo h1 {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .nav-links {
          list-style: none;
          display: flex;
          gap: 30px;
        }
        .nav-links a {
          color: #0070f3;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        .nav-links a:hover {
          color: #005bb5;
        }
      `}</style>
    </header>
  );
}

export default Header;
