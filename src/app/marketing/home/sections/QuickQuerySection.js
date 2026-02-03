import { colors } from '../../styles/colors';

export default function QuickQuerySection() {
  return (
    <section style={{
      padding: '5rem 0',
      backgroundColor: colors.primary,
      color: colors.background
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 1rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          Have a Quick Query?
        </h2>
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '2rem',
          opacity: 0.9
        }}>
          Get in touch with our experts for personalized assistance and property recommendations
        </p>

        <form style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: '1rem',
              borderRadius: '5px',
              border: 'none',
              fontSize: '1rem'
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: '1rem',
              borderRadius: '5px',
              border: 'none',
              fontSize: '1rem'
            }}
          />
          <input
            type="tel"
            placeholder="Your Phone"
            style={{
              padding: '1rem',
              borderRadius: '5px',
              border: 'none',
              fontSize: '1rem'
            }}
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            style={{
              padding: '1rem',
              borderRadius: '5px',
              border: 'none',
              fontSize: '1rem',
              resize: 'vertical'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '1rem 2rem',
              backgroundColor: colors.secondary,
              color: colors.background,
              border: 'none',
              borderRadius: '5px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Send Message
          </button>
        </form>

        <div style={{
          marginTop: '3rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          flexWrap: 'wrap'
        }}>
          <div>
            <h4 style={{ marginBottom: '0.5rem' }}>Call Us</h4>
            <p style={{ opacity: 0.9 }}>+1 (555) 123-4567</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '0.5rem' }}>Email Us</h4>
            <p style={{ opacity: 0.9 }}>info@realestate.com</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '0.5rem' }}>Visit Us</h4>
            <p style={{ opacity: 0.9 }}>123 Business St, City</p>
          </div>
        </div>
      </div>
    </section>
  );
}