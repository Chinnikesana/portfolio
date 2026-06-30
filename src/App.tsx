import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import StatusBar from './components/StatusBar';

function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <StatusBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
