import { colors } from '../../styles/colors';

export default function OurProjectsSection() {
  const projects = [
    {
      title: 'Luxury Apartments',
      location: 'Downtown District',
      price: '$250,000 - $450,000',
      status: 'Available',
      image: '/api/placeholder/300/200'
    },
    {
      title: 'Commercial Complex',
      location: 'Business Hub',
      price: '$500,000 - $1,200,000',
      status: 'Pre-Launch',
      image: '/api/placeholder/300/200'
    },
    {
      title: 'Villa Community',
      location: 'Suburban Area',
      price: '$350,000 - $750,000',
      status: 'Under Construction',
      image: '/api/placeholder/300/200'
    }
  ];

  return (
    <section style={{
      padding: '5rem 0',
      backgroundColor: colors.background
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: colors.text,
            marginBottom: '1rem'
          }}>
            Our Projects
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: colors.textLight,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Explore our premium real estate projects designed for modern living and investment success
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              backgroundColor: colors.background,
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: `1px solid ${colors.border}`
            }}>
              <div style={{
                height: '200px',
                backgroundColor: colors.backgroundLight,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: colors.textLight
              }}>
                Project Image
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: colors.text,
                  marginBottom: '0.5rem'
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: colors.textLight,
                  marginBottom: '1rem'
                }}>
                  📍 {project.location}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: colors.primary
                  }}>
                    {project.price}
                  </span>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    backgroundColor: colors.accent,
                    color: colors.background,
                    borderRadius: '15px',
                    fontSize: '0.875rem'
                  }}>
                    {project.status}
                  </span>
                </div>
                <button style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: colors.primary,
                  color: colors.background,
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}