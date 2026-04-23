import { Star, Activity, GitBranch } from 'lucide-react';
import { Github } from './Icons';

export default function Repositories() {
  const repos = [
    {
      title: "Flaw Detection ML Model",
      url: "https://github.com/Deepankar-19/Machine-Learning-",
      problem: "Detecting flaws in eddy current signals where manual inspection is slow and prone to error.",
      dataset: "Real-world noisy signal data from industrial equipment.",
      model: "Transitioned from Gradient Boosting to a CNN architecture to capture complex temporal patterns.",
      results: "Achieved 99.71% training accuracy and 98.87% test accuracy, ensuring high reliability."
    },
    {
      title: "Sign Language Detection",
      url: "https://github.com/Deepankar-19/Sign-language-detection",
      problem: "Translating continuous hand and facial gestures into discrete classifications in real-time.",
      dataset: "Custom collected temporal sequences driven by MediaPipe Holistic.",
      model: "LSTM (Long Short-Term Memory) sequential network for time-series gesture recognition.",
      results: "Achieved 96.4% test accuracy with low latency for live webcam inference."
    }
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        <h2 className="section-title">
          <span>Open Source</span>
          Core ML Work
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {repos.map((repo, idx) => (
            <div key={idx} className="glass-panel" style={{ position: 'relative', overflow: 'hidden' }}>
              {/* Decorative accent */}
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'var(--accent-primary)' }}></div>
              
              <div style={{ paddingLeft: '1rem' }}>
                  <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                      <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Github className="text-accent" /> {repo.title}
                      </h3>
                      <a href={repo.url} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                          View Source
                      </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                          <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}><Activity size={16} className="text-secondary" /> The Problem</h4>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{repo.problem}</p>

                          <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}><DatabaseIcon size={16} className="text-secondary" /> The Dataset</h4>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{repo.dataset}</p>
                      </div>
                      <div>
                          <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}><GitBranch size={16} className="text-secondary" /> Model Architecture</h4>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{repo.model}</p>

                          <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}><Star size={16} className="text-secondary" /> Results</h4>
                          <div style={{ background: 'rgba(0, 210, 255, 0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(0, 210, 255, 0.1)' }}>
                              <p style={{ color: 'var(--accent-primary)', fontSize: '0.95rem', fontWeight: 600 }}>{repo.results}</p>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Inline icon component fallback
function DatabaseIcon({ size, className }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
    );
}
