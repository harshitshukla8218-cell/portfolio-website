import { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education & Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#070913]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-9 h-9 rounded-xl bg-cyan-400 text-slate-950 flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
            HS
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white tracking-tight text-base group-hover:text-cyan-400 transition-colors">
              Harsh Shukla
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Full-Stack Developer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 border border-slate-800 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Socials & Contact CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/harshitshukla8218-cell"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/harsh-shukla-214196364"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-sky-400 hover:bg-slate-800/80 rounded-lg transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href="/Harsh_Shukla_Resume.pdf"
            download="Harsh_Shukla_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700/60 transition-colors"
            title="Download Harsh Shukla's Resume"
          >
            <FileDown className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </a>

          <button
            onClick={onContactClick}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors cursor-pointer"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-cyan-400 py-1 border-b border-slate-800/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/harshitshukla8218-cell"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-300 bg-slate-800 rounded-lg"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/harsh-shukla-214196364"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-sky-400 bg-slate-800 rounded-lg"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/Harsh_Shukla_Resume.pdf"
                download="Harsh_Shukla_Resume.pdf"
                className="px-3 py-2 text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-lg flex items-center gap-1.5"
              >
                <FileDown className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resume</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 rounded-lg"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
