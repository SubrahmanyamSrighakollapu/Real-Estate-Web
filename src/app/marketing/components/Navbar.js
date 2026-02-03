// components/Navbar.js
'use client'; // Required for client-side interactivity (dropdown)

import { useState } from 'react';
import Link from 'next/link';
import { colors } from '../styles/colors'; // Adjust path if needed

export default function Navbar() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <nav
      style={{
        backgroundColor: 'white', // or colors.background if it's white
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: '1rem 0',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo - Left */}
        <Link
          href="/"
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: colors.primary || '#1e40af', // adjust to your brand color
            textDecoration: 'none',
            letterSpacing: '-0.5px',
          }}
        >
          LOGO
        </Link>

        {/* Centered Navigation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.5rem',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <Link
            href="/"
            style={{
              color: colors.text || '#374151',
              fontWeight: '500',
              textDecoration: 'none',
              fontSize: '1.05rem',
            }}
          >
            Home
          </Link>

          <Link
            href="/about"
            style={{
              color: colors.text || '#374151',
              fontWeight: '500',
              textDecoration: 'none',
              fontSize: '1.05rem',
            }}
          >
            About
          </Link>

          {/* Projects with Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsProjectsOpen(true)}
            onMouseLeave={() => setIsProjectsOpen(false)}
          >
            <button
              style={{
                background: 'none',
                border: 'none',
                color: colors.text || '#374151',
                fontWeight: '500',
                fontSize: '1.05rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              Projects
              <span style={{ fontSize: '0.8rem' }}>▼</span>
            </button>

            {isProjectsOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                  minWidth: '220px',
                  padding: '0.75rem 0',
                  marginTop: '0.5rem',
                  zIndex: 10,
                }}
              >
                <Link
                  href="/projects/ongoing"
                  style={{
                    display: 'block',
                    padding: '0.75rem 1.5rem',
                    color: '#374151',
                    textDecoration: 'none',
                    fontSize: '1rem',
                  }}
                  onClick={() => setIsProjectsOpen(false)}
                >
                  Ongoing Projects
                </Link>
                <Link
                  href="/projects/completed"
                  style={{
                    display: 'block',
                    padding: '0.75rem 1.5rem',
                    color: '#374151',
                    textDecoration: 'none',
                    fontSize: '1rem',
                  }}
                  onClick={() => setIsProjectsOpen(false)}
                >
                  Completed Projects
                </Link>
                <Link
                  href="/projects/upcoming"
                  style={{
                    display: 'block',
                    padding: '0.75rem 1.5rem',
                    color: '#374151',
                    textDecoration: 'none',
                    fontSize: '1rem',
                  }}
                  onClick={() => setIsProjectsOpen(false)}
                >
                  Upcoming Projects
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/blogs"
            style={{
              color: colors.text || '#374151',
              fontWeight: '500',
              textDecoration: 'none',
              fontSize: '1.05rem',
            }}
          >
            Blogs
          </Link>

          <Link
            href="/gallery"
            style={{
              color: colors.text || '#374151',
              fontWeight: '500',
              textDecoration: 'none',
              fontSize: '1.05rem',
            }}
          >
            Gallery
          </Link>
        </div>

        {/* Right side - Search + Enquire Now */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.4rem',
              color: colors.text || '#4b5563',
              cursor: 'pointer',
            }}
            aria-label="Search"
          >
            🔍
          </button>

          <button
            style={{
              backgroundColor: colors.button || '#d97706', // gold/amber shade like in image
              color: 'white',
              padding: '0.75rem 1.8rem',
              borderRadius: '9999px', // pill shape
              border: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(217,119,6,0.25)',
            }}
          >
            Enquire Now
          </button>
        </div>
      </div>
    </nav>
  );
}