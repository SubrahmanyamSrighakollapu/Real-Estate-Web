import { colors } from '../styles/colors';

export default function AboutPage() {
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
            About Us
          </h1>
          <p style={{
            fontSize: '1.25rem',
            opacity: 0.9
          }}>
            Your trusted partner in real estate excellence
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section style={{
        padding: '5rem 0',
        backgroundColor: colors.background
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: colors.text,
                marginBottom: '1.5rem'
              }}>
                Our Story
              </h2>
              <p style={{
                color: colors.textLight,
                lineHeight: '1.8',
                marginBottom: '1.5rem'
              }}>
                Founded with a vision to revolutionize the real estate industry, we have been helping 
                clients achieve their property dreams for over a decade. Our commitment to excellence 
                and customer satisfaction has made us a trusted name in the industry.
              </p>
              <p style={{
                color: colors.textLight,
                lineHeight: '1.8'
              }}>
                We believe in building long-term relationships with our clients by providing 
                transparent, reliable, and professional services that exceed expectations.
              </p>
            </div>
            <div style={{
              height: '400px',
              backgroundColor: colors.backgroundLight,
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: colors.textLight
            }}>
              Company Image
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{
        padding: '5rem 0',
        backgroundColor: colors.backgroundLight
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '3rem'
          }}>
            <div style={{
              backgroundColor: colors.background,
              padding: '2.5rem',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: colors.primary,
                marginBottom: '1.5rem'
              }}>
                Our Mission
              </h3>
              <p style={{
                color: colors.textLight,
                lineHeight: '1.8'
              }}>
                To provide exceptional real estate services that help our clients make informed 
                investment decisions and achieve their financial goals through strategic property investments.
              </p>
            </div>
            <div style={{
              backgroundColor: colors.background,
              padding: '2.5rem',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: colors.primary,
                marginBottom: '1.5rem'
              }}>
                Our Vision
              </h3>
              <p style={{
                color: colors.textLight,
                lineHeight: '1.8'
              }}>
                To be the leading real estate company known for innovation, integrity, and excellence 
                in delivering value-driven property solutions to our clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Our Team
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: colors.textLight
            }}>
              Meet the experts behind our success
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {['CEO & Founder', 'Head of Sales', 'Legal Advisor'].map((role, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '2rem'
              }}>
                <div style={{
                  width: '150px',
                  height: '150px',
                  backgroundColor: colors.backgroundLight,
                  borderRadius: '50%',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.textLight
                }}>
                  Photo
                </div>
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: colors.text,
                  marginBottom: '0.5rem'
                }}>
                  Team Member
                </h4>
                <p style={{
                  color: colors.textLight
                }}>
                  {role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}