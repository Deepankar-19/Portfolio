import { Code2, BrainCircuit, Layout, PenTool, Braces } from 'lucide-react';

export default function Skills() {
  const customCategories = [
    {
      title: "Machine Learning & AI",
      icon: <BrainCircuit size={20} className="text-accent" />,
      skills: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Deep Learning", "CNNs & LSTMs", "Computer Vision", "Data Analysis"]
    },
    {
      title: "Backend & Systems",
      icon: <Braces size={20} className="text-accent" />,
      skills: ["FastAPI", "RESTful APIs", "Databases", "System Deployment"]
    },
    {
      title: "Frontend Engineering",
      icon: <Layout size={20} className="text-accent" />,
      skills: ["React", "JavaScript (ES6+)", "Vite", "Responsive Design", "CSS3 / Modern Styling"]
    },
    {
      title: "Tools & Infrastructure",
      icon: <PenTool size={20} className="text-accent" />,
      skills: ["Git", "GitHub", "Docker", "MATLAB", "Jupyter Notebooks"]
    },
    {
      title: "CS Fundamentals",
      icon: <Code2 size={20} className="text-accent" />,
      skills: ["Data Structures", "Object-Oriented Programming (OOP)", "Algorithm Optimization"]
    }
  ];

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <h2 className="section-title">
          <span>Stack</span>
          Technical Toolkit
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customCategories.map((category, index) => (
            <div key={index} className="glass-panel" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    <div style={{ padding: '0.5rem', background: 'rgba(0, 210, 255, 0.1)', borderRadius: '8px' }}>
                        {category.icon}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{category.title}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {category.skills.map((skill, idx) => (
                        <span key={idx} style={{
                            background: 'var(--bg-primary)',
                            border: '1px solid var(--border-color)',
                            color: 'var(--text-secondary)',
                            padding: '0.4rem 0.8rem',
                            borderRadius: '4px',
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            transition: 'var(--transition)'
                        }} className="hover:border-accent hover:text-primary">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
