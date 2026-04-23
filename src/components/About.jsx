import { Brain, Code, Terminal, Server } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="container">
        <h2 className="section-title">
          <span>Who I Am</span>
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="glass-panel" style={{ padding: '3rem' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              ECE Undergrad turned <span className="text-secondary">Machine Learning Engineer</span>.
            </h3>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              Currently an undergraduate at SSN College of Engineering, my focus lies squarely at the intersection of deep learning, applied AI systems, and robust software engineering. 
            </p>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              I believe that a model is only as good as the system that serves it. I don't just train models in Jupyter notebooks; I build end-to-end ML pipelines — from handling noisy real-world data to deploying real-time inference APIs.
            </p>
            
            <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
               <h4 style={{ color: 'var(--text-primary)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Core Technical Mindset</h4>
               <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                     <Brain size={20} className="text-accent" style={{ marginTop: '3px' }} />
                     <span style={{ color: 'var(--text-secondary)' }}><strong>Applied Deep Learning</strong> focusing on CNNs, LSTMs and signal/vision tasks.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                     <Terminal size={20} className="text-accent" style={{ marginTop: '3px' }} />
                     <span style={{ color: 'var(--text-secondary)' }}><strong>System Level Thinking</strong> dealing with resource constraints and performance optimization.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                     <Server size={20} className="text-accent" style={{ marginTop: '3px' }} />
                     <span style={{ color: 'var(--text-secondary)' }}><strong>Full-Stack Integration</strong> via FastAPI and React to ship models as products.</span>
                  </li>
               </ul>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
             {/* Decorative element resembling data matrix or code */}
             <div className="glass-panel" style={{ height: '100%', minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                    Problem Solving Approach
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <h5 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>1. Handling Noisy Real-World Data</h5>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Experience with industrial signal data taught me that preprocessing and feature engineering often yield higher returns than complex model architectures.</p>
                    </div>
                    <div>
                        <h5 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>2. Model Performance Iteration</h5>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>From baselines like Gradient Boosting, I iteratively adopt deep learning architectures (e.g. CNNs to capture spatial/temporal correlations) only when empirically justified.</p>
                    </div>
                    <div>
                        <h5 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>3. Debugging ML Systems</h5>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Understanding that ML bugs are silent. I emphasize structured implementations, robust evaluation metrics, and strict validation checks to prevent silent failures.</p>
                    </div>
                </div>
             </div>
             
             {/* Floating badges */}
             <div style={{ position: 'absolute', top: '-1rem', right: '-1rem', background: '#fff', color: '#000', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 'bold', transform: 'rotate(5deg)' }}>
                Hardware & Software
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
