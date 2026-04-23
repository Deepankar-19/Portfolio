import { Trophy, Briefcase, ChevronRight, Zap } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section relative">
      <div className="container">
        <h2 className="section-title">
          <span>Background</span>
          Experience & Achievements
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Experience */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ padding: '0.75rem', background: 'var(--bg-card)', borderRadius: '12px', color: 'var(--accent-primary)' }}>
                <Briefcase size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Professional Experience</h3>
            </div>

            <div className="glass-panel" style={{ position: 'relative' }}>
              {/* Timeline dot */}
              <div style={{ position: 'absolute', left: '-6px', top: '2.5rem', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-primary)', boxShadow: '0 0 10px var(--accent-glow)' }}></div>
              <div style={{ position: 'absolute', left: '-1px', top: '3.5rem', bottom: '2rem', width: '2px', background: 'var(--border-color)' }}></div>

              <div style={{ paddingLeft: '1.5rem' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>Indira Gandhi Centre for Atomic Research (IGCAR)</span>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Machine Learning Intern</h4>
                
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <ChevronRight size={16} className="text-secondary" style={{ marginTop: '4px', flexShrink: 0 }} />
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Built an robust ML pipeline for identifying flaws in eddy current signals, directly impacting industrial non-destructive testing capabilities.</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <ChevronRight size={16} className="text-secondary" style={{ marginTop: '4px', flexShrink: 0 }} />
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Identified limitations in baseline Gradient Boosting algorithms and successfully transitioned to a CNN architecture to capture complex temporal dynamics in the signal data.</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <ChevronRight size={16} className="text-secondary" style={{ marginTop: '4px', flexShrink: 0 }} />
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Achieved a highly reliable test accuracy of <strong className="text-primary" style={{ color: 'var(--text-primary)' }}>98.87%</strong> (Train: 99.71%), proving the model's viability strictly on noisy, real-world signals.</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <ChevronRight size={16} className="text-secondary" style={{ marginTop: '4px', flexShrink: 0 }} />
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Gained exposure to PLC-based automation (hardware) systems, strengthening my ability to build machine learning solutions that interact deeply with physical constraints.</span>
                    </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ padding: '0.75rem', background: 'var(--bg-card)', borderRadius: '12px', color: '#ffb703' }}>
                <Trophy size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Hackathons & Awards</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="glass-panel hover:scale-[1.02]" style={{ transform: 'scale(1)', transition: 'transform 0.3s' }}>
                    <div className="flex justify-between items-start" style={{ marginBottom: '0.5rem' }}>
                        <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Zap size={18} className="text-accent" /> 1st Prize, Build-a-Bot
                        </h4>
                        <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', background: 'rgba(255, 183, 3, 0.1)', color: '#ffb703', borderRadius: '4px' }}>Winner</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Chennai Institute of Technology</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Demonstrated fast problem-solving under pressure and strict system constraints to build a functional prototype from scratch.</p>
                </div>
                
                <div className="glass-panel hover:scale-[1.02]" style={{ transform: 'scale(1)', transition: 'transform 0.3s' }}>
                    <div className="flex justify-between items-start" style={{ marginBottom: '0.5rem' }}>
                        <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Zap size={18} className="text-accent" /> 1st Prize, Hacktrix IOTRIX’25
                        </h4>
                        <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', background: 'rgba(255, 183, 3, 0.1)', color: '#ffb703', borderRadius: '4px' }}>Winner</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Sri Sairam Engineering College</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Architected and presented an end-to-end intelligent solution within a highly competitive technical environment.</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
