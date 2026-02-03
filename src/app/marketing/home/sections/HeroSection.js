import { colors } from '../../styles/colors';

export default function HeroSection() {
  return (
    <section style={{
      backgroundImage: 'url("/hero-background.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '2rem',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '600px',
        marginBottom: '3rem'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          color: colors.background,
          marginBottom: '1rem',
          lineHeight: '1.2',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          Secure Your Future with Approved Open Plots
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: colors.background,
          marginBottom: '2rem',
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
        }}>
          Invest in DTCP & RERA approved plots in prime developing corridors.<br />
          100% Clear Title • Instant Registration • High Appreciation
        </p>
        
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '4rem'
        }}>
          <button style={{
            backgroundColor: colors.button,
            color: colors.background,
            padding: '1rem 2rem',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            View Projects
          </button>
          <button style={{
            backgroundColor: 'rgba(255,255,255,0.9)',
            color: colors.text,
            padding: '1rem 2rem',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Talk to Expert
          </button>
        </div>
      </div>

      {/* Search Card */}
      <div style={{
        backgroundColor: colors.background,
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '800px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          alignItems: 'end'
        }}>
          <div>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '600',
              color: colors.text
            }}>Location</label>
            <select style={{
              width: '100%',
              padding: '0.75rem',
              border: `1px solid ${colors.border}`,
              borderRadius: '5px',
              fontSize: '1rem'
            }}>
              <option>Select Location</option>
            </select>
          </div>
          
          <div>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '600',
              color: colors.text
            }}>Property Type</label>
            <select style={{
              width: '100%',
              padding: '0.75rem',
              border: `1px solid ${colors.border}`,
              borderRadius: '5px',
              fontSize: '1rem'
            }}>
              <option>All types</option>
            </select>
          </div>
          
          <div>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '600',
              color: colors.text
            }}>Budget Range</label>
            <input 
              type="text" 
              placeholder="Any Budget"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: `1px solid ${colors.border}`,
                borderRadius: '5px',
                fontSize: '1rem'
              }}
            />
          </div>
          
          <button style={{
            backgroundColor: colors.button,
            color: colors.background,
            padding: '0.75rem 2rem',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Search Plots
          </button>
        </div>
      </div>
    </section>
  );
}