import { Briefcase, Building, CheckCircle2, MapPin } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export default function ExperienceSection() {
  const experiences: ExperienceItem[] = [
    {
      role: 'Event & Technical Community Lead',
      company: 'Tech Manthan Community (BSACET)',
      type: 'Technical Community Leadership',
      duration: '2024 - Present',
      location: 'Mathura, India',
      summary:
        'Leading college technical community, driving hackathons, competitive programming workshops, and peer mentoring.',
      responsibilities: [
        'Organize college hackathons, coding contests, and technical bootcamps for 300+ engineering students.',
        'Mentor junior peers in core data structures, modern full-stack web development (React & Node.js), and Git version control.',
        'Coordinate speaker sessions and technical project exhibitions within the institution.',
      ],
      technologies: ['Community Leadership', 'Hackathons', 'Mentorship', 'Full-Stack Workshops', 'Git'],
    },
    {
      role: 'Full-Stack Developer',
      company: 'Client & Hackathon Projects',
      type: 'Contract & Team Projects',
      duration: '2024 - Present',
      location: 'India • Remote',
      summary:
        'Building full-stack web applications, AI anomaly detection systems, and e-commerce storefronts for clients and national competitions.',
      responsibilities: [
        'Built the MPLADS AI Sentinel platform for the Smart India Hackathon (SIH), creating real-time anomaly detection workflows and public audit dashboards.',
        'Developed production-grade luxury brand storefronts for fashion clients, integrating Google Gemini AI for smart styling consultations.',
        'Engineered responsive web applications with React 19, TypeScript, and Tailwind CSS with smooth navigation and fast load speeds.',
        'Integrated asynchronous backend services in Python (FastAPI/Flask) and Node.js with database schemas on PostgreSQL and SQLite.',
      ],
      technologies: ['React 19', 'TypeScript', 'Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Vite'],
    },
    {
      role: 'Web Application Developer',
      company: 'Web & Open-Source Projects',
      type: 'Independent Development',
      duration: '2023 - 2024',
      location: 'India',
      summary:
        'Developed end-to-end web applications, astronomical calculation platforms, and developer tooling during undergraduate studies.',
      responsibilities: [
        'Built Talk to Jyotisha, implementing astronomical calculations with NASA JPL ephemeris and Sidereal coordinate conversions.',
        'Developed AI Code Reviewer college capstone project to assist students with code quality and automated security audits.',
        'Designed RESTful API endpoints and integrated cloud databases with MongoDB Atlas and SQLite.',
        'Wrote technical articles on Medium regarding system design, low-latency architectures, and distributed systems.',
      ],
      technologies: ['Python', 'Flask', 'JavaScript', 'Node.js', 'Express', 'MongoDB Atlas', 'REST APIs', 'Git'],
    },
  ];

  return (
    <section id="experience" className="py-20 relative z-10 border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            My experience building real-world software, hackathon platforms, and client solutions.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-1">
                    <span className="text-cyan-400 font-medium flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5" />
                      {exp.company}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end gap-1.5">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800 text-slate-200 border border-slate-700">
                    {exp.duration}
                  </span>
                  <span className="text-xs text-slate-400">{exp.type}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-slate-300 text-sm leading-relaxed my-4">
                {exp.summary}
              </p>

              {/* Responsibilities */}
              <div className="space-y-2 my-4">
                {exp.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/60 text-slate-300 border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
