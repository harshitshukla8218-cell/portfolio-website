import { Briefcase, GraduationCap, Compass, Film } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function ExperienceTimeline() {
  const milestones = [
    {
      episode: 'EPISODE 03 // ACTIVE HORIZON',
      period: '2024 - PRESENT',
      role: 'Full-Stack Software Engineer & System Architect',
      organization: 'Independent Production Engineering',
      badge: 'Enterprise Focus',
      description:
        'Architecting production-ready enterprise platforms. Built the Smart Inventory & Procurement Management System with role-based personas, real-time KPI telemetry, automated shortage calculation, and vendor market comparison.',
      skills: ['FastAPI', 'Python', 'React 19', 'TypeScript', 'Neon PostgreSQL', 'Tailwind CSS'],
      icon: Briefcase,
      color: 'border-cyan-400 text-cyan-300 bg-cyan-500/10',
    },
    {
      episode: 'EPISODE 02 // WEB SYSTEMS ASCENT',
      period: '2023 - 2024',
      role: 'Full-Stack Developer (MERN / Node Ecosystem)',
      organization: 'Web Platforms & Services',
      badge: 'API Systems',
      description:
        'Engineered responsive full-stack applications with Node.js, Express, MongoDB Atlas, and Nodemailer integration. Developed robust backend API endpoints, error-handling middleware, and cross-browser interfaces.',
      skills: ['Node.js', 'Express.js', 'MongoDB Atlas', 'RESTful APIs', 'Modern JavaScript'],
      icon: Compass,
      color: 'border-amber-400 text-amber-300 bg-amber-500/10',
    },
    {
      episode: 'EPISODE 01 // THE GENESIS',
      period: 'FOUNDATIONAL MILESTONE',
      role: 'Computer Science & Software Development',
      organization: 'Academic & Practical Specialization',
      badge: 'Core Principles',
      description:
        'Deep study and applied project work in Data Structures, Database Management Systems (RDBMS & NoSQL), Object-Oriented Programming, and Software Engineering methodologies.',
      skills: ['Data Structures', 'Algorithms', 'Database Design', 'System Architecture'],
      icon: GraduationCap,
      color: 'border-violet-400 text-violet-300 bg-violet-500/10',
    },
  ];

  return (
    <section id="experience" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-400 uppercase tracking-widest">
            <Film className="w-3.5 h-3.5" />
            <span>Scene 05 // The Chronicles</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase">
            CAREER <span className="text-gradient-violet">EPISODES & MILESTONES</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-light">
            A chronological timeline of systems engineered, architectures solved, and engineering evolution.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 space-y-12">
          {milestones.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => sound.playHover()}
                className="relative pl-8 sm:pl-10 group"
              >
                {/* Timeline Dot Icon */}
                <div
                  className={`absolute -left-[19px] top-1.5 w-9 h-9 rounded-full border-2 flex items-center justify-center backdrop-blur-md shadow-xl ${item.color} group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                {/* Content Box */}
                <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all hover:-translate-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-white/5">
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
                      {item.episode}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/5 text-slate-300 border border-white/10 uppercase">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors uppercase tracking-tight">
                    {item.role}
                  </h3>
                  <h4 className="text-sm font-medium text-slate-400 mb-3 font-mono">{item.organization}</h4>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4 font-light">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-black/60 text-slate-400 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
