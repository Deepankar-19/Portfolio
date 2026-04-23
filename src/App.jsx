import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MLWorkflow from './components/MLWorkflow';
import About from './components/About';
import Projects from './components/Projects';
import Repositories from './components/Repositories';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <MLWorkflow />
        <About />
        <Projects />
        <Repositories />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
