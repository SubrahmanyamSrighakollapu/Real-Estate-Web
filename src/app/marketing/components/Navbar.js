'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <nav
      style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* LOGO */}
        <Link
          href="/"
          style={{
            fontSize: '1.6rem',
            fontWeight: '700',
            color: '#111827',
            textDecoration: 'none',
            letterSpacing: '-0.3px',
          }}
        >
          LOGO
        </Link>

        {/* CENTER NAV */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.2rem',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {['Home', 'About'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/marketing/${item.toLowerCase()}`}
              style={navLink}
            >
              {item}
            </Link>
          ))}

          {/* PROJECTS DROPDOWN */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsProjectsOpen(true)}
            onMouseLeave={() => setIsProjectsOpen(false)}
          >
            <button
              style={{
                ...navLink,
                background: 'none',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                cursor: 'pointer',
              }}
            >
              Projects
              <ChevronDown size={16} />
            </button>

            {isProjectsOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '110%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                  minWidth: '220px',
                  padding: '0.6rem 0',
                }}
              >
                {['Ongoing Projects', 'Completed Projects', 'Upcoming Projects'].map(
                  (item) => (
                    <Link
                      key={item}
                      href={`/projects/${item.split(' ')[0].toLowerCase()}`}
                      style={{
                        display: 'block',
                        padding: '0.75rem 1.4rem',
                        fontSize: '0.95rem',
                        color: '#374151',
                        textDecoration: 'none',
                      }}
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>

          {['Blogs', 'Gallery'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              style={navLink}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.4rem' }}>
          <button
            aria-label="Search"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#4b5563',
              padding: 0,
            }}
          >
            <Search size={20} />
          </button>

          <button
            style={{
              backgroundColor: '#C9A24D',
              color: '#ffffff',
              padding: '0.6rem 1.6rem',
              borderRadius: '9999px',
              border: 'none',
              fontSize: '0.95rem',
              fontWeight: '600',
              cursor: 'pointer',
            }}
            onClick={() => window.location.href = '/marketing/getintouch'}
          >
            Enquire Now
          </button>
        </div>
      </div>
    </nav>
  );
}

const navLink = {
  fontSize: '0.95rem',
  fontWeight: '500',
  color: '#374151',
  textDecoration: 'none',
};
