'use client';
import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <ul className="footer-links">
        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
        <li><Link href="/terms-of-service">Terms of Service</Link></li>
        </ul>
      </div>

      <style jsx>{`
        footer {
          background: #333;
          color: #fff;
          padding: 20px;
          text-align: center;
        }
        .footer-links {
          list-style: none;
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        .footer-links a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
