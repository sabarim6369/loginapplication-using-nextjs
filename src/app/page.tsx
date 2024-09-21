'use client'
import Image from "next/image";

import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
   
  const handleLoginClick = () => {
    router.push('/Login'); 
  };
  return (
    <div className="container">
      <header>
        {/* <button className="login-btn" onClick={handleLoginClick}>
          Login
        </button> */}
      </header>

      <main>
        <h1>Welcome to the Home Page!</h1>
        <p>Explore the amazing features of our website.</p>
      </main>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100vh;
        }

        header {
          display: flex;
          justify-content: flex-end;
          padding: 1rem;
        }

        .login-btn {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
        }

        main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
          text-align: center;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.25rem;
          color: #555;
        }

        .login-btn:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>

  );
}
