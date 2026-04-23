import { Database, Filter, Layers, BrainCircuit, Activity, Rocket } from 'lucide-react';

export default function MLWorkflow() {
  const steps = [
    { icon: <Database size={24} />, title: 'Data', desc: 'Ingestion & formatting' },
    { icon: <Filter size={24} />, title: 'Preprocessing', desc: 'Cleaning & normalization' },
    { icon: <Layers size={24} />, title: 'Feature Extraction', desc: 'Signal & pattern ID' },
    { icon: <BrainCircuit size={24} />, title: 'Model', desc: 'Training & tuning' },
    { icon: <Activity size={24} />, title: 'Evaluation', desc: 'Validation & metrics' },
    { icon: <Rocket size={24} />, title: 'Deployment', desc: 'API integration' },
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>End-to-End ML Pipeline</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            My approach to building reliable machine learning systems from scratch.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center" style={{ position: 'relative', flexWrap: 'wrap', gap: '2rem' }}>
          
          {/* Connecting Line for Desktop */}
          <div style={{
              position: 'absolute',
              top: '40px',
              left: '5%',
              right: '5%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)',
              zIndex: 0,
              display: 'none',
              '@media (min-width: 768px)': {
                  display: 'block'
              }
          }} className="md-line"></div>

          {steps.map((step, index) => (
            <div key={index} style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                flex: '1 1 120px'
            }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--accent-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    color: 'var(--accent-primary)',
                    boxShadow: '0 0 15px rgba(0, 210, 255, 0.1)',
                    transition: 'var(--transition)'
                }} className="hover:scale-110">
                    {step.icon}
                </div>
                <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{step.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{step.desc}</p>
            </div>
          ))}

        </div>
      </div>
      
      {/* CSS fix for the line */}
      <style>{`
        @media (min-width: 768px) {
            .md-line { display: block !important; }
        }
        .hover\\:scale-110:hover { transform: scale(1.1); box-shadow: 0 0 25px rgba(0, 210, 255, 0.3) !important; background: var(--bg-card-hover) !important; }
      `}</style>
    </section>
  );
}
