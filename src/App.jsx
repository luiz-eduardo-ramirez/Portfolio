// src/App.jsx
import './index.css';

import Navbar          from './components/Navbar';
import HeroSection     from './components/HeroSection';
import AboutSection    from './components/AboutSection';
import CurriculumSection from './components/CurriculumSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection  from './components/ContactSection';
import FooterSection   from './components/FooterSection';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-slate-100">
      {/* Navegação fixa */}
      <Navbar />

      {/* Seções SPA — scroll contínuo */}
      <main>
        <HeroSection />
        <AboutSection />
        <CurriculumSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
}

export default App;