import "./App.css"
import StaticContent from "./components/StaticContent"
import { useState } from "react"
import { motion } from 'framer-motion';
import About from './components/About.jsx'
import Education from './components/education/Education.jsx'
import Experience from './components/experience/Experience.jsx'
import Skills from './components/skills/Skills.jsx'
import Project from './components/projects/Project.jsx'
import FunZone from './components/funzone/FunZone.jsx';
import ProfileButton from "./components/navbar/ProfileButton.jsx";
import NavButtons from "./components/navbar/NavButtons.jsx";

const App = () => {
  const [activeComponent, setActiveComponent] = useState('About');
  const [activeLink, setActiveLink] = useState('About');

  const handleNavClick = (component) => {
    setActiveComponent(component);
    setActiveLink(component);
  };

  const navLinkClass = (link) => {
    let baseClasses = 'px-4 py-2 transition-colors duration-200 w-full h-full text-lg font-medium';
    if (activeLink === link) {
      return `${baseClasses} bg-gray-200 text-blue-500`;
    }
    return `${baseClasses} text-text hover:bg-gray-100`;
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'About':
        return <About />;
      case 'Education':
        return <Education />;
      case 'Experience':
        return <Experience />;
      case 'Skills':
        return <Skills />;
      case 'Projects':
        return <Project />;
      case 'Fun Zone':
        return <FunZone />;
      default:
        return <About />;
    }
  };

  const [isLeftPaneVisible, setIsLeftPaneVisible] = useState(true);

  const toggleLeftPane = () => {
    setIsLeftPaneVisible(!isLeftPaneVisible);
  };

  return (
    <div className="min-h-screen py-12 px-16 app-container">
        <div className="h-full grid md:grid-cols-[25%_75%] grid-rows-[auto_1fr]">
            <div className="border-r border-b border-gray-300 h-12">
                <ProfileButton setActiveComponent={setActiveComponent} handleNavClick={handleNavClick} />
            </div>
            <div className="border-b border-gray-300 h-12 top-nav">
                <button className="hamburger-menu md:hidden" onClick={toggleLeftPane}>
                  &#9776;
                </button>
                <div className="flex w-full h-full">
                    <NavButtons activeLink={activeLink} handleNavClick={handleNavClick} navLinkClass={navLinkClass} />
                </div>
            </div>
            <div className={`border-r border-gray-300 left-pane ${isLeftPaneVisible ? '' : 'hidden'} md:block`}>
                <StaticContent />
            </div>
            <div className="p-6 bg-primary overflow-y-auto right-pane">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                >
                {renderComponent()}
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default App
