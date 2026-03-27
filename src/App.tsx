
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0E0E0C] text-[#F4F0EA] selection:bg-white selection:text-black">
        <CustomCursor />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;