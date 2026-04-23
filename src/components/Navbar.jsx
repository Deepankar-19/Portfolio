import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(10, 10, 11, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        padding: '1rem 0'
    }}>
      <div className="container flex items-center justify-between">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem' }}>
            Deepankar <span className="text-accent">Sharma</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div style={{ display: 'none' }} className="md-flex items-center gap-8">
            <ul className="flex items-center gap-6" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a href={link.href} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        
        <div className="md-flex items-center gap-4" style={{ display: 'none' }}>
           <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Let's Talk</a>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md-hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ color: 'var(--text-primary)' }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg-secondary)',
            padding: '1rem 2rem',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
        }}>
            {navLinks.map((link) => (
                <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    style={{ color: 'var(--text-primary)', fontWeight: 500 }}
                >
                    {link.name}
                </a>
            ))}
            <a href="#contact" className="btn btn-primary" style={{ width: 'fit-content' }}>Let's Talk</a>
        </div>
      )}
    </nav>
  );
}
