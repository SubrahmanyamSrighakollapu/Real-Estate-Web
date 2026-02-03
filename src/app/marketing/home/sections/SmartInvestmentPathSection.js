import { colors } from '../../styles/colors';

export default function SmartInvestmentPathSection() {
  const steps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Free consultation to understand your investment goals and preferences'
    },
    {
      step: '02',
      title: 'Property Selection',
      description: 'Expert-curated property options based on your budget and requirements'
    },
    {
      step: '03',
      title: 'Investment Planning',
      description: 'Detailed financial planning and ROI analysis for informed decisions'
    },
    {
      step: '04',
      title: 'Documentation',
      description: 'Complete legal documentation and registration support'
    },
    {
      step: '05',
      title: 'Handover',
      description: 'Smooth property handover with ongoing support and maintenance'
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
            Smart Investment Path
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: colors.textLight,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Our proven 5-step process ensures a smooth and profitable real estate investment journey
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {steps.map((step, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              backgroundColor: colors.background,
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: colors.primary,
                color: colors.background,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                flexShrink: 0
              }}>
                {step.step}
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: colors.text,
                  marginBottom: '0.5rem'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  color: colors.textLight,
                  lineHeight: '1.6'
                }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}