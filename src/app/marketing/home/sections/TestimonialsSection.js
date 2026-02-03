import { colors } from '../../styles/colors';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'John Smith',
      role: 'Property Investor',
      content: 'Excellent service and great returns on investment. The team guided me through every step of the process.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'First-time Buyer',
      content: 'Professional and trustworthy. They helped me find the perfect property within my budget.',
      rating: 5
    },
    {
      name: 'Michael Brown',
      role: 'Real Estate Developer',
      content: 'Outstanding market knowledge and transparent dealings. Highly recommend their services.',
      rating: 5
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
            What Our Clients Say
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: colors.textLight,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={{
              backgroundColor: colors.backgroundLight,
              padding: '2rem',
              borderRadius: '10px',
              border: `1px solid ${colors.border}`
            }}>
              <div style={{
                display: 'flex',
                marginBottom: '1rem'
              }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} style={{ color: colors.secondary, fontSize: '1.25rem' }}>
                    ⭐
                  </span>
                ))}
              </div>
              <p style={{
                color: colors.text,
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                fontStyle: 'italic'
              }}>
                "{testimonial.content}"
              </p>
              <div>
                <h4 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: colors.text,
                  marginBottom: '0.25rem'
                }}>
                  {testimonial.name}
                </h4>
                <p style={{
                  color: colors.textLight,
                  fontSize: '0.9rem'
                }}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}