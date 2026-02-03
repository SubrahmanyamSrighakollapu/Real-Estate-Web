"use client";

import { ArrowUpRight, MapPin } from 'lucide-react';
import { colors } from '../../styles/colors';

const projectData = [
  { image: '/our-projects-image1.png', price: '₹14,500 / sq.yd' },
  { image: '/our-projects-image2.png', price: '₹14,500 / sq.yd' },
  { image: '/our-projects-image3.png', price: '₹14,500 / sq.yd' },
  { image: '/our-projects-image4.png', price: '₹14,500 / sq.yd' },
  { image: '/our-projects-image5.png', price: '₹14,500 / sq.yd' },
  { image: '/our-projects-image6.png', price: '₹14,500 / sq.yd' },
];

export default function OurProjectsSection() {
  return (
    <section
      style={{
        padding: '5.5rem 1rem',
        backgroundColor: colors.backgroundLight || '#f9fafb',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.8rem' }}>
          <h2
            style={{
              fontSize: '2.6rem',
              fontWeight: '600',
              color: colors.primary,
              marginBottom: '0.6rem',
            }}
          >
            Our Projects
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: colors.textLight,
              maxWidth: '650px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Handpicked open plots with high appreciation potential and
            <br />
            100% legal clarity.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '2.2rem',
          }}
        >
          {projectData.map((project, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 6px 18px rgba(0,0,0,0.07)',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow =
                  '0 14px 32px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 6px 18px rgba(0,0,0,0.07)';
              }}
            >
              {/* Image */}
              <div style={{ height: '250px', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt="Green Valley Phase"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '1.4rem 1.6rem 1.6rem' }}>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: colors.text,
                    marginBottom: '0.35rem',
                  }}
                >
                  Green Valley Phase
                </h3>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: colors.textLight,
                    fontSize: '0.95rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  <MapPin size={15} />
                  Shadnagar, Hyderabad
                </div>

                <div
                  style={{
                    fontSize: '0.9rem',
                    color: '#6b7280',
                    marginBottom: '1.2rem',
                  }}
                >
                  RERA Approved | Ongoing
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: colors.primary,
                    }}
                  >
                    {project.price}
                  </div>

                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      backgroundColor: '#e8f6ef',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ArrowUpRight
                      size={20}
                      color={colors.primary}
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
