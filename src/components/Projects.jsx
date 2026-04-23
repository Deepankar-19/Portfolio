import { ExternalLink } from 'lucide-react';
import { Github } from './Icons';

export default function Projects() {
  const mlProjects = [
    {
      title: "Hazard Detection System",
      desc: "YOLO-based object detection for potholes, debris, and waterlogging. Integrated with a real-time inference API and deployed in a SaaS style.",
      tags: ["YOLO", "Computer Vision", "Real-time API", "Deployment"],
      link: "https://hazard-detection-seven.vercel.app/",
      featured: true
    },
    {
      title: "Sign Language Detection",
      desc: "LSTM-based gesture recognition system using MediaPipe Holistic for keypoint extraction. Achieved 96.4% accuracy across multiple dynamic gestures.",
      tags: ["LSTM", "MediaPipe", "Time-Series", "Accuracy: 96.4%"],
      github: "https://github.com/Deepankar-19/Sign-language-detection",
      featured: true
    },
    {
      title: "Spotify Song Recommender",
      desc: "Content-based recommendation system applying TF-IDF and cosine similarity on metadata and lyrics. Features a real-time web interface.",
      tags: ["TF-IDF", "NLP", "Cosine Similarity", "React"],
      link: "https://spotify-frontend-sage.vercel.app/"
    },
    {
      title: "Loan Eligibility Checker",
      desc: "ML-based decision system for loan approvals, elegantly integrated with a chatbot-style interface.",
      tags: ["Classification", "Chatbot UI", "Decision System"],
      link: "https://ai-loan-chatbot.vercel.app/"
    }
  ];

  const fullStackProjects = [
    {
      title: "Food Preorder System",
      desc: "FastAPI + React full stack system. Architected robust REST APIs with OTP authentication, scaling to gracefully handle 300+ active users.",
      tags: ["FastAPI Backend", "React", "User Auth API", "Scalable System"],
      link: "http://hotchicksonly.vercel.app/"
    },
    {
      title: "Edunova Smart Classroom",
      desc: "Comprehensive full stack educational platform integrating AI microservices (chatbot, facial recognition) and complex optimization algorithms.",
      tags: ["Full Stack Architecture", "Facial Recognition", "System Integration"],
      link: "https://edunnova.vercel.app/"
    }
  ];

  const ProjectCard = ({ project, primary }) => (
    <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%', borderColor: primary ? 'rgba(0, 210, 255, 0.3)' : 'var(--border-color)' }}>
      <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {project.title}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
            {project.link && <a href={project.link} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} className="hover:text-accent"><ExternalLink size={20} /></a>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} className="hover:text-accent"><Github size={20} /></a>}
        </div>
      </h3>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1, fontSize: '0.95rem' }}>{project.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {project.tags.map(tag => (
            <span key={tag} style={{ 
                fontSize: '0.8rem', 
                padding: '0.25rem 0.75rem', 
                borderRadius: '50px', 
                background: tag.includes('Accuracy') ? 'rgba(0, 210, 255, 0.1)' : 'var(--bg-secondary)', 
                color: tag.includes('Accuracy') ? 'var(--accent-primary)' : 'var(--text-secondary)',
                border: '1px solid',
                borderColor: tag.includes('Accuracy') ? 'rgba(0, 210, 255, 0.2)' : 'transparent'
            }}>{tag}</span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          <span>Portfolio</span>
          Deployed Models & Systems
        </h2>

        <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>
                🧠 Machine Learning Systems 
                <span style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem', background: 'var(--accent-primary)', color: '#000', borderRadius: '50px', fontWeight: 600 }}>Primary Focus</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mlProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} primary={project.featured} />
                ))}
            </div>
        </div>

        <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>
                🌐 Full Stack Applications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fullStackProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} primary={false} />
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}
