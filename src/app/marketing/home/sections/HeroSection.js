import { colors } from '../../styles/colors';

export default function HeroSection() {
  return (
    <section style={{
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
      color: colors.background,
      padding: '6rem 0',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          lineHeight: '1.2'
        }}>
          Your Dream Property Awaits
        </h1>
        <p style={{
          fontSize: '1.25rem',
          marginBottom: '2rem',
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto 2rem'
        }}>
          Discover premium real estate investments with guaranteed returns and expert guidance
        </p>
        <button style={{
          backgroundColor: colors.secondary,
          color: colors.background,
          padding: '1rem 2rem',
          fontSize: '1.1rem',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: '600'
        }}>
          Explore Properties
        </button>
      </div>
    </section>
  );
}