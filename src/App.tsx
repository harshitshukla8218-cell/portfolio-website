import ParticleHeroBackground from './components/ParticleHeroBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070913] text-slate-100 selection:bg-cyan-400 selection:text-slate-950 font-sans">
      {/* Subtle Interactive Particle Constellation */}
      <ParticleHeroBackground />

      {/* Clean Navbar */}
      <Navbar onContactClick={scrollToContact} />

      {/* 5 Core Pages: Overview, Projects, Experience, Certifications, Contact */}
      <main className="relative">
        <Hero />
        <StatsBanner />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  );
}
