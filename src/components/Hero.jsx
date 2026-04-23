import { ArrowRight, Code2, Database } from 'lucide-react';
import { Github } from './Icons';

export default function Hero() {
  return (
    <section className="section flex items-center justify-center" style={{ minHeight: '100vh', paddingTop: '8rem', position: 'relative' }}>
      {/* Background decoration */}
      <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'var(--accent-primary)',
          filter: 'blur(150px)',
          opacity: 0.15,
          borderRadius: '50%',
          zIndex: 0
      }} className="floating"></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-card)', padding: '0.5rem 1rem', borderRadius: '50px', border: '1px solid var(--border-color)', marginBottom: '2rem', animation: 'fadeIn 1s ease-out' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)' }} className="animate-pulse"></span>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Available for ML Engineer roles</span>
          </div>

          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1.5rem', animation: 'fadeIn 1s ease-out 0.2s both' }}>
            Building <span className="text-gradient">Intelligent Systems</span> from Real-World Signals.
          </h1>
          
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem', animation: 'fadeIn 1s ease-out 0.4s both' }}>
            Machine Learning Engineer & Software Developer. I turn noisy, complex datasets into robust deployments and build the full-stack infrastructure around them.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap" style={{ animation: 'fadeIn 1s ease-out 0.6s both' }}>
            <a href="#projects" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              View Projects <ArrowRight size={20} />
            </a>
            <a href="https://github.com/Deepankar-19" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              <Github size={20} /> GitHub
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginTop: '5rem', borderTop: '1px solid var(--border-color)', paddingTop: '3rem', animation: 'fadeIn 1s ease-out 0.8s both' }}>
             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>99.7%</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Model Accuracy Achieved</span>
             </div>
             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>End-to-End</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Data to Deployment</span>
             </div>
             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>300+</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Active Users on Deployments</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
