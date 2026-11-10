import { Award, GraduationCap, Users, FileDown } from 'lucide-react';

interface CertificationItem {
  title: string;
  issuer: string;
  category: 'Degree' | 'Specialization' | 'Leadership';
  description: string;
  skills: string[];
}

export default function CertificationsSection() {
  const items: CertificationItem[] = [
    {
      title: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
      issuer: 'BSA College of Engineering & Technology (BSACET), Mathura • AKTU',
      category: 'Degree',
      description:
        'Four-year undergraduate engineering curriculum (Batch 2024 – 2028 | CGPA: 7.8 / 10.0). Rigorous foundations in Data Structures, Algorithms, Operating Systems, DBMS, and Object-Oriented Software Design.',
      skills: ['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'OOP (C++/Java)', 'CGPA: 7.8'],
    },
    {
      title: 'Automate India Hackathon 2026 — Certificate of Recognition',
      issuer: 'HackBriven & Microsoft Office Noida (August 2026)',
      category: 'Specialization',
      description:
        'Awarded Certificate of Recognition for outstanding technical performance, innovation, and dedicated execution at the Microsoft Office Noida campus.',
      skills: ['AI Automation', 'Rapid Prototyping', 'Hackathon Innovation', 'Full-Stack Systems'],
    },
    {
      title: 'GenAI Powered Data Analytics Job Simulation',
      issuer: 'Tata & Forage (June 2026)',
      category: 'Specialization',
      description:
        'Practical simulation covering Exploratory Data Analysis (EDA), risk profiling, predicting delinquency with generative AI models, and executive data storytelling.',
      skills: ['Exploratory Data Analysis', 'Risk Modeling', 'GenAI Analytics', 'Data Storytelling'],
    },
    {
      title: 'Event & Technical Community Lead',
      issuer: 'Tech Manthan Community (BSACET)',
      category: 'Leadership',
      description:
        'Leading college technical community, organizing campus hackathons, technical workshops, and mentoring 300+ junior students in modern full-stack web development and Git.',
      skills: ['Technical Leadership', 'Community Mentorship', 'Workshop Organization', 'Team Building'],
    },
    {
      title: 'Smart India Hackathon (SIH) National Finalist',
      issuer: 'Ministry of Education Innovation Cell, Govt. of India',
      category: 'Specialization',
      description:
        'Selected as national finalist for designing and building MPLADS AI Sentinel — an AI anomaly and fraud detection engine auditing public fund development schemes.',
      skills: ['SIH Finalist', 'AI Anomaly Detection', 'Geospatial Auditing', 'National Level'],
    },
    {
      title: 'Full-Stack Web Development & Modern React Architecture',
      issuer: 'Engineering Specialization',
      category: 'Specialization',
      description:
        'End-to-end full-stack development focusing on modern React 19, TypeScript, asynchronous state management, component architecture, and high-performance UX.',
      skills: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'PostgreSQL', 'FastAPI'],
    },
  ];

  return (
    <section id="certifications" className="py-20 relative z-10 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <Award className="w-3.5 h-3.5" />
            <span>Academic & Professional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Academic qualifications, recognized hackathon achievements, and verified credentials.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => {
            const isDegree = item.category === 'Degree';
            const isLeadership = item.category === 'Leadership';
            const Icon = isDegree ? GraduationCap : isLeadership ? Users : Award;

            return (
              <div
                key={idx}
                className={`rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors ${
                  isDegree ? 'md:col-span-2 bg-gradient-to-br from-slate-900/90 to-slate-950 border-cyan-900/40' : ''
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-slate-800 text-emerald-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-white block">
                          {item.issuer}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-800/60 mt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/80 text-emerald-300 border border-emerald-500/20"
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

        {/* Download Resume Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">Looking for the complete resume?</h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Download the ATS-friendly PDF version containing detailed projects, academics, and coursework.
            </p>
          </div>
          <a
            href="/Harsh_Shukla_Resume.pdf"
            download="Harsh_Shukla_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-500/20 cursor-pointer shrink-0"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
