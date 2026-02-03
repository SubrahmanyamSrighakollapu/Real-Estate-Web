import { colors } from '../styles/colors';

export default function GalleryPage() {
  const galleryItems = [
    { title: 'Luxury Apartment Living Room', category: 'Interior' },
    { title: 'Modern Kitchen Design', category: 'Interior' },
    { title: 'Building Exterior View', category: 'Exterior' },
    { title: 'Swimming Pool Area', category: 'Amenities' },
    { title: 'Gym and Fitness Center', category: 'Amenities' },
    { title: 'Garden Landscape', category: 'Exterior' },
    { title: 'Master Bedroom', category: 'Interior' },
    { title: 'Rooftop Terrace', category: 'Amenities' },
    { title: 'Parking Area', category: 'Exterior' }
  ];

  const categories = ['All', 'Interior', 'Exterior', 'Amenities'];

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
        color: colors.background,
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            Gallery
          </h1>
          <p style={{
            fontSize: '1.25rem',
            opacity: 0.9
          }}>
            Explore our stunning property portfolio
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section style={{
        padding: '3rem 0',
        backgroundColor: colors.backgroundLight
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            {categories.map((category, index) => (
              <button
                key={index}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: index === 0 ? colors.primary : colors.background,
                  color: index === 0 ? colors.background : colors.text,
                  border: `1px solid ${colors.border}`,
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{
        padding: '3rem 0 5rem',
        backgroundColor: colors.background
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {galleryItems.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: colors.background,
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  border: `1px solid ${colors.border}`,
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  height: '250px',
                  backgroundColor: colors.backgroundLight,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.textLight,
                  fontSize: '1.1rem'
                }}>
                  {item.title}
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: colors.text,
                    marginBottom: '0.5rem'
                  }}>
                    {item.title}
                  </h3>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    backgroundColor: colors.primary,
                    color: colors.background,
                    borderRadius: '15px',
                    fontSize: '0.875rem'
                  }}>
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        padding: '4rem 0',
        backgroundColor: colors.backgroundLight,
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: colors.text,
            marginBottom: '1rem'
          }}>
            Interested in Our Properties?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: colors.textLight,
            marginBottom: '2rem'
          }}>
            Schedule a visit to experience these amazing properties in person
          </p>
          <button style={{
            padding: '1rem 2rem',
            backgroundColor: colors.primary,
            color: colors.background,
            border: 'none',
            borderRadius: '5px',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Schedule a Visit
          </button>
        </div>
      </section>
    </div>
  );
}