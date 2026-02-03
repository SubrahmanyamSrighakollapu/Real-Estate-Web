import { colors } from '../../styles/colors';

export default function WhyInvestUsSection() {
  const features = [
    {
      title: 'Expert Guidance',
      description: 'Professional advice from experienced real estate experts',
      icon: '🏆'
    },
    {
      title: 'Guaranteed Returns',
      description: 'Assured returns on your investment with transparent processes',
      icon: '💰'
    },
    {
      title: 'Prime Locations',
      description: 'Properties in the most sought-after locations with high growth potential',
      icon: '📍'
    },
    {
      title: 'Legal Support',
      description: 'Complete legal assistance and documentation support',
      icon: '⚖️'
    }
  ];

  return (
    <section style={{
      padding: '5rem 0',
      backgroundColor: colors.backgroundLight
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
            Why Invest With Us?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: colors.textLight,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            We provide comprehensive real estate solutions with a focus on maximizing your investment potential
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              backgroundColor: colors.background,
              padding: '2rem',
              borderRadius: '10px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: colors.text,
                marginBottom: '1rem'
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: colors.textLight,
                lineHeight: '1.6'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}