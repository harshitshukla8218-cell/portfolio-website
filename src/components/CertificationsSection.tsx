import { Award, GraduationCap } from 'lucide-react';

interface CertificationItem {
  title: string;
  issuer: string;
  category: 'Degree' | 'Specialization';
  description: string;
  skills: string[];
}

export default function CertificationsSection() {
  const items: CertificationItem[] = [
    {
      title: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
      issuer: 'Undergraduate Engineering Program',
      category: 'Degree',
      description:
        'Comprehensive computer science education covering Data Structures, Algorithms, Operating Systems, Database Management Systems (DBMS), Computer Networks, and Software Engineering methodologies.',
      skills: ['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'OOP'],
    },
    {
      title: 'Full-Stack Web Development & React Architecture',
      issuer: 'Web Engineering Specialization',
      category: 'Specialization',
      description:
        'End-to-end full-stack development focusing on modern React 19, TypeScript, asynchronous state management, component architecture, and responsive UI design.',
      skills: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Frontend Architecture'],
    },
    {
      title: 'Backend Engineering & Python Microservices',
      issuer: 'Backend & Systems Development',
      category: 'Specialization',
      description:
        'Mastery of modern Python backend frameworks (FastAPI, Flask), asynchronous workers, RESTful API design, authentication (JWT), and system integration.',
      skills: ['Python 3', 'FastAPI', 'Flask', 'REST APIs', 'JWT Security'],
    },
    {
      title: 'Relational Database Design & SQL Engineering',
      issuer: 'Database Systems',
      category: 'Specialization',
      description:
        'Practical expertise in relational schema normalization, multi-table relationships, indexing for fast lookups, PostgreSQL, and SQLite database management.',
      skills: ['PostgreSQL', 'SQLite', 'Database Indexing', 'SQL', 'Schema Design'],
    },
    {
      title: 'Data Structures & Algorithmic Problem Solving',
      issuer: 'Computer Science Core',
      category: 'Specialization',
      description:
        'Applied algorithmic problem solving covering arrays, linked lists, trees, graphs, sorting algorithms, and rigorous time/space complexity analysis.',
      skills: ['Time Complexity', 'Space Complexity', 'Algorithms', 'Problem Solving'],
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
            Academic qualifications and technical engineering specializations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => {
            const isDegree = item.category === 'Degree';
            const Icon = isDegree ? GraduationCap : Award;

            return (
              <div
                key={idx}
                className={`rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors ${
                  isDegree ? 'md:col-span-2 bg-gradient-to-br from-slate-900/90 to-slate-950' : ''
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

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
