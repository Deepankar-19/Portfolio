import { Mail, Phone } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  return (
    <footer id="contact" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', padding: '4rem 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem', color: 'var(--text-primary)' }}>
          Let's Build Something Intelligent.
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          Currently looking for ML Engineering and Software Development opportunities. If you're building systems that matter, my inbox is open.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
          <a href="https://github.com/Deepankar-19" target="_blank" rel="noreferrer" title="GitHub" style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', transition: 'var(--transition)' }} className="hover:border-accent hover:text-accent hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" title="LinkedIn" style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', transition: 'var(--transition)' }} className="hover:border-accent hover:text-accent hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="mailto:Deepankar.sharma2005@gmail.com" title="Deepankar.sharma2005@gmail.com" style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', transition: 'var(--transition)' }} className="hover:border-accent hover:text-accent hover:scale-110">
            <Mail size={24} />
          </a>
          <a href="tel:+919445473914" title="+91 94454 73914" style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', transition: 'var(--transition)' }} className="hover:border-accent hover:text-accent hover:scale-110">
            <Phone size={24} />
          </a>
        </div>

        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
            Deepankar <span className="text-accent">Sharma</span>
          </span>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        .hover\\:border-accent:hover { border-color: var(--accent-primary) !important; box-shadow: 0 0 15px rgba(0, 210, 255, 0.2); }
        .hover\\:text-accent:hover { color: var(--accent-primary) !important; }
        .hover\\:scale-110:hover { transform: scale(1.1); }
      `}</style>
    </footer>
  );
}
