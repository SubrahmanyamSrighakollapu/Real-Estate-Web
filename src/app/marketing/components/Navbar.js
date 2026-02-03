import Link from 'next/link';
import { colors } from '../styles/colors';

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: colors.background,
      borderBottom: `1px solid ${colors.border}`,
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1rem'
      }}>
        <Link href="/" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: colors.primary,
          textDecoration: 'none'
        }}>
          RealEstate
        </Link>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/" style={{
            color: colors.text,
            textDecoration: 'none',
            fontWeight: '500'
          }}>
            Home
          </Link>
          <Link href="/about" style={{
            color: colors.text,
            textDecoration: 'none',
            fontWeight: '500'
          }}>
            About Us
          </Link>
          <Link href="/gallery" style={{
            color: colors.text,
            textDecoration: 'none',
            fontWeight: '500'
          }}>
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  );
}