// components/OurProjectsSection.js
import { colors } from '../../styles/colors';

// For real project, replace these placeholder image paths with your actual assets
// Example: import greenValley1 from '../../assets/green-valley-1.jpg';
// Then use src={greenValley1} in <img />

const projectData = [
  { image: '/our-projects-image1', price: '₹14,500 / sqyd' },
  { image: '/our-projects-image2', price: '₹14,500 / sqyd' },
  { image: '/our-projects-image3', price: '₹14,500 / sqyd' },
  { image: '/our-projects-image4', price: '₹14,500 / sqyd' },
  { image: '/our-projects-image5', price: '₹14,500 / sqyd' },
  { image: '/our-projects-image6', price: '₹14,500 / sqyd' },
];

export default function OurProjectsSection() {
  return (
    <section style={{
      padding: '5rem 1rem',
      backgroundColor: colors.background || '#f9fafb',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Heading & Subtext */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
            fontWeight: '700',
            color: colors.text || '#111827',
            marginBottom: '1rem',
          }}>
            Our Projects
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: colors.textLight || '#4b5563',
            maxWidth: '720px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Handpicked open plots with high appreciation potential and
            <br />
            100% legal clarity.
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '2rem 1.8rem',
        }}>
          {projectData.map((project, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)';
              }}
            >
              {/* Image */}
              <div style={{ height: '260px', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt="Green Valley Phase"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.06)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem 1.6rem 1.8rem' }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  color: colors.text || '#111827',
                  marginBottom: '0.6rem',
                }}>
                  Green Valley Phase
                </h3>

                <p style={{
                  fontSize: '1rem',
                  color: '#6b7280',
                  marginBottom: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}>
                  📍 Shadnagar, Hyderabad
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.6rem',
                  marginBottom: '1.1rem',
                }}>
                  <span style={{
                    backgroundColor: '#ecfdf5',
                    color: '#10b981',
                    padding: '0.35rem 0.9rem',
                    borderRadius: '999px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                  }}>
                    RERA Approved
                  </span>
                  <span style={{
                    backgroundColor: '#fef3c7',
                    color: '#d97706',
                    padding: '0.35rem 0.9rem',
                    borderRadius: '999px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                  }}>
                    Ongoing
                  </span>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <div style={{
                    fontSize: '1.35rem',
                    fontWeight: '700',
                    color: colors.primary || '#1d4ed8',
                  }}>
                    {project.price}
                  </div>

                  <div style={{
                    fontSize: '1.8rem',
                    color: colors.primary || '#1d4ed8',
                    fontWeight: 'bold',
                    lineHeight: 1,
                  }}>
                    →
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