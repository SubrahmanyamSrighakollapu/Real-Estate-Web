'use client';

import { Phone, MessageSquare, Mail } from 'lucide-react';
import { colors } from '../../styles/colors';

const teamMembers = [
  {
    name: 'Sarah Jenkins',
    role: 'Senior Investment Advisor',
    experience: '12+ Years Experience',
    image: '/team-1.jpg',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Senior Investment Advisor',
    experience: '12+ Years Experience',
    image: '/team-2.jpg',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Senior Investment Advisor',
    experience: '12+ Years Experience',
    image: '/team-3.jpg',
  },
];

export default function MeetOurExpertTeam() {
  return (
    <section
      style={{
        padding: '3rem 0',
        backgroundColor: colors.backgroundLight,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
        }}
      >
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontSize: '2.3rem',
              fontWeight: '700',
              color: colors.primary,
              marginBottom: '0.6rem',
            }}
          >
            Meet Our Expert Team
          </h2>
          <p
            style={{
              fontSize: '0.95rem',
              color: colors.textLight,
              maxWidth: '620px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            The professionals dedicated to helping you invest with confidence.
            We bring decades of market experience to your doorstep.
          </p>
        </div>

        {/* CARDS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={{
                backgroundColor: colors.background,
                borderRadius: '14px',
                padding: '1.6rem',
                boxShadow: '0 8px 22px rgba(0,0,0,0.08)',
                border: '1px solid #eef2ee',
                textAlign: 'center',
              }}
            >
              {/* IMAGE */}
              <div
                style={{
                  width: '100%',
                  height: '180px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  marginBottom: '1.4rem',
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                  }}
                />
              </div>

              {/* NAME */}
              <h4
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: colors.primary,
                  marginBottom: '0.3rem',
                }}
              >
                {member.name}
              </h4>

              {/* ROLE */}
              <p
                style={{
                  fontSize: '0.9rem',
                  color: colors.textDark,
                  marginBottom: '0.25rem',
                }}
              >
                {member.role}
              </p>

              {/* EXPERIENCE */}
              <p
                style={{
                  fontSize: '0.85rem',
                  color: colors.textLight,
                  marginBottom: '1.1rem',
                }}
              >
                {member.experience}
              </p>

              {/* ICONS */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '1.4rem',
                  marginBottom: '1.4rem',
                }}
              >
                <Phone size={18} color={colors.textLight} />
                <MessageSquare size={18} color={colors.textLight} />
                <Mail size={18} color={colors.textLight} />
              </div>

              {/* BUTTON */}
              <button
                style={{
                  backgroundColor: colors.button,
                  color: '#fff',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '0.55rem 1.6rem',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(217,119,6,0.25)',
                }}
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
