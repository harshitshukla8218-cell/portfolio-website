import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Copy,
  Check,
  MapPin,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const email = 'harshitshukla8218@gmail.com';

  const roles = [
    'Full-Stack Software Engineer',
    'React & TypeScript Developer',
    'Python & Backend Specialist',
    'Smart India Hackathon Participant',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2400);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#00f0ff', '#38bdf8', '#818cf8', '#10b981'],
    });

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full-Time Roles & Opportunities</span>
              <span className="text-slate-700">|</span>
              <span className="text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" />
                India
              </span>
            </div>

            {/* Greeting & Headline */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-lg sm:text-xl font-medium text-slate-300">
                <span className="text-2xl animate-wave select-none" role="img" aria-label="Waving hand">
                  👋
                </span>
                <span>Hi, I am</span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Harsh <span className="text-gradient-cyan">Shukla</span>
              </h1>

              {/* Dynamic Rotating Role */}
              <div className="pt-1 flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-mono font-bold">
                <span className="text-cyan-400">❯</span>
                <span className="text-slate-200 min-h-[1.4em] inline-block">
                  {displayedText}
                </span>
                <span className="inline-block w-2.5 h-6 bg-cyan-400 animate-cursor ml-0.5" />
              </div>
            </div>

            {/* Authentic Human Bio */}
            <p className="text-base sm:text-lg text-slate-300/90 font-normal leading-relaxed max-w-2xl">
              I'm a full-stack developer who loves creating practical, well-engineered web applications.
              From building AI anomaly detection systems in national hackathons to delivering client fashion
              storefronts and astronomical engines, I focus on writing clean code, building intuitive UIs,
              and scaling backend services.
            </p>

            {/* Quick Tech Highlights */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-300 font-mono">
              <span className="text-slate-500 font-sans mr-1">Core Stack:</span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                React 19
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                TypeScript
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                Python (FastAPI & Flask)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                Node.js
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                PostgreSQL & SQLite
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                Tailwind CSS
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href="https://github.com/harshitshukla8218-cell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/harsh-shukla-214196364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-sky-400 border border-slate-800 transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Professional Portrait */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Subtle Ambient Glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/15 via-indigo-600/10 to-transparent rounded-3xl blur-2xl opacity-60 pointer-events-none" />

            {/* Photo Card Container */}
            <div className="relative w-full max-w-sm rounded-2xl bg-slate-900/90 border border-slate-800 p-3 shadow-2xl overflow-hidden group">
              {/* Photo */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-950">
                <img
                  src="/assets/harsh-portrait.jpg"
                  alt="Harsh Shukla"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500 ease-out"
                />

                {/* Subtle Gradient Shadow at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Natural Name Tag Overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-white text-sm">Harsh Shukla</h3>
                    <p className="text-xs text-slate-400">Software Engineer</p>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Open to Hire
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
