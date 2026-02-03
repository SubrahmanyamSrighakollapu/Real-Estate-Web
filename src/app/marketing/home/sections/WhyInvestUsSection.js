import { colors } from '../../styles/colors';

export default function WhyInvestUsSection() {
  const features = [
    {
      title: '100% Clear Title',
      description: 'Every project undergoes strict legal scrutiny. We guarantee plots free from litigation or encumbrances.',
      icon: '✓'
    },
    {
      title: 'Govt. Approved',
      description: 'All our layouts are DTCP & RERA-approved, ensuring hassle-free construction permissions and loan access.',
      icon: '🏛️'
    },
    {
      title: 'High Appreciation',
      description: 'Located in rapidly developing areas near SEZs and highways to ensure maximum ROI for you.',
      icon: '📈'
    },
    {
      title: 'Post-Sales Support',
      description: 'From registration assistance to project maintenance and fencing, we stay with you.',
      icon: '💰'
    }
  ];

  const benefits = [
    {
      title: 'Strong Investment Returns',
      description: 'Invest in premium land assets that deliver reliable long-term growth.'
    },
    {
      title: 'Wide Property Selection',
      description: 'Build a balanced real estate portfolio with multiple property choices.'
    },
    {
      title: 'Protection Against Inflation',
      description: 'Safeguard your wealth with assets that retain value as prices rise.'
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
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: colors.investGreen,
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
            We dont just sell plots, we build wealth. Our rigorous selection process ensures your investment is safe, secure, and profitable.
          </p>
        </div>

        {/* Top Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '1.5rem'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: colors.background,
                border: `3px solid ${colors.investGreen}`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '2rem'
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: colors.text,
                marginBottom: '1rem'
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: colors.textLight,
                lineHeight: '1.6',
                fontSize: '0.95rem'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section with Image and Benefits */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Left - Image */}
          <div style={{
            height: '400px',
            backgroundColor: colors.background,
            borderRadius: '10px',
            backgroundImage: 'url("/why-invest-us-image.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: colors.textLight
          }}>
            Architectural Plans Image
          </div>

          {/* Right - Benefits */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            {benefits.map((benefit, index) => (
              <div key={index} style={{
                padding: '1.5rem',
                backgroundColor: colors.background,
                borderRadius: '10px',
                border: `2px solid ${colors.investGreen}`,
                borderLeft: `6px solid ${colors.investGreen}`
              }}>
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: colors.text,
                  marginBottom: '0.5rem'
                }}>
                  {benefit.title}
                </h4>
                <p style={{
                  color: colors.textLight,
                  lineHeight: '1.6'
                }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}