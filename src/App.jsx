import './App.css';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import FunZone from './components/sections/FunZone';
import profile from './data/profileData.json';

const App = () => (
  <>
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-secondary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-text focus:shadow-md"
    >
      Skip to content
    </a>

    <Nav name={profile.name} />

    <main id="main">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <FunZone />
    </main>

    <Footer />
  </>
);

export default App;
