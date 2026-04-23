import { Code2, BrainCircuit, Layout, PenTool, Braces, Terminal } from 'lucide-react';

export default function Skills() {
  const customCategories = [
    {
      title: "Programming Languages",
      icon: <Terminal size={20} className="text-accent" />,
      skills: ["Python", "C++", "SQL"]
    },
    {
      title: "Web Development",
      icon: <Layout size={20} className="text-accent" />,
      skills: ["HTML", "CSS", "React.js", "MongoDB", "REST APIs"]
    },
    {
      title: "Tools & Frameworks",
      icon: <PenTool size={20} className="text-accent" />,
      skills: ["Git", "Docker", "MATLAB"]
    },
    {
      title: "Libraries",
      icon: <Braces size={20} className="text-accent" />,
      skills: ["NumPy", "Pandas", "scikit-learn"]
    },
    {
      title: "Technical Areas",
      icon: <BrainCircuit size={20} className="text-accent" />,
      skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Data Analysis", "Data Visualization"]
    },
    {
      title: "Core CS Concepts",
      icon: <Code2 size={20} className="text-accent" />,
      skills: ["Data Structures", "OOP"]
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
