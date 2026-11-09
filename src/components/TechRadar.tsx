import { useState } from 'react';
import {
  Server,
  Layout,
  Database,
  Cpu,
  Wrench,
  CheckCircle,
} from 'lucide-react';
import { sound } from '../utils/soundEffects';

interface SkillCategory {
  id: string;
  title: string;
  icon: any;
  description: string;
  skills: { name: string; level: string; experience: string; tag: string }[];
}

export default function TechRadar() {
  const [activeTab, setActiveTab] = useState<string>('backend');

  const categories: SkillCategory[] = [
    {
      id: 'backend',
      title: 'Backend & APIs',
      icon: Server,
      description: 'High-throughput APIs, asynchronous workers, authentication and business logic.',
      skills: [
        { name: 'FastAPI', level: 'Advanced', experience: 'Production enterprise ERP, Swagger docs', tag: 'Python' },
        { name: 'Python', level: 'Advanced', experience: 'Data manipulation, backend services, scripting', tag: 'Core' },
        { name: 'Node.js', level: 'Proficient', experience: 'Event-driven servers, CLI tools, scripts', tag: 'Runtime' },
        { name: 'Express.js', level: 'Proficient', experience: 'RESTful endpoints, middleware, auth', tag: 'Framework' },
        { name: 'REST & OpenAPI', level: 'Advanced', experience: 'Contract-first API design, Swagger UI', tag: 'Standard' },
        { name: 'JWT & RBAC Auth', level: 'Proficient', experience: 'Role-based access control, security', tag: 'Security' },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend & UI',
      icon: Layout,
      description: 'Responsive, fluid user interfaces with micro-interactions and atomic design.',
      skills: [
        { name: 'React 19', level: 'Advanced', experience: 'Modern hooks, concurrent features, component state', tag: 'Library' },
        { name: 'TypeScript', level: 'Proficient', experience: 'Type safety, strict interfaces, generics', tag: 'Language' },
        { name: 'Tailwind CSS', level: 'Advanced', experience: 'Utility-first styling, dark mode, responsive layouts', tag: 'Styling' },
        { name: 'Vite', level: 'Advanced', experience: 'Ultra-fast HMR builds, modern bundling', tag: 'Tooling' },
        { name: 'HTML5 & CSS3', level: 'Mastery', experience: 'Semantic web, accessibility, CSS Grid, animations', tag: 'Core' },
        { name: 'JavaScript (ES6+)', level: 'Advanced', experience: 'Async/await, closures, prototypes, DOM manipulation', tag: 'Language' },
      ],
    },
    {
      id: 'database',
      title: 'Databases & Cloud',
      icon: Database,
      description: 'Relational & document data models, serverless clusters, and cloud hosting.',
      skills: [
        { name: 'PostgreSQL', level: 'Proficient', experience: 'Complex queries, indexes, relational integrity', tag: 'RDBMS' },
        { name: 'Neon Serverless', level: 'Proficient', experience: 'Cloud serverless Postgres scaling', tag: 'Cloud DB' },
        { name: 'MongoDB Atlas', level: 'Proficient', experience: 'Document storage, Mongoose schemas, cloud clusters', tag: 'NoSQL' },
        { name: 'SQLite', level: 'Advanced', experience: 'Embedded relational DB, local fast prototyping', tag: 'RDBMS' },
        { name: 'Alembic', level: 'Proficient', experience: 'Automated schema migrations & versioning', tag: 'Migrations' },
        { name: 'Vercel & Render', level: 'Proficient', experience: 'PaaS server and static client deployment', tag: 'DevOps' },
      ],
    },
    {
      id: 'practices',
      title: 'Tools & Practices',
      icon: Wrench,
      description: 'Engineering standards, code quality, version control, and debugging workflows.',
      skills: [
        { name: 'Git & GitHub', level: 'Advanced', experience: 'Branch management, pull requests, collaboration', tag: 'VCS' },
        { name: 'Postman / Swagger', level: 'Advanced', experience: 'API testing, automated request validation', tag: 'Testing' },
        { name: 'Agile & Scrum', level: 'Proficient', experience: 'Sprint planning, user story breakdown, iteration', tag: 'Methodology' },
        { name: 'Performance Optimization', level: 'Proficient', experience: 'Asset minification, query indexing, lazy loading', tag: 'Quality' },
      ],
    },
  ];

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>Scene 03 // The Arsenal</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase">
            TECHNICAL <span className="text-gradient-cyan">INVENTORY & WEAPONRY</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Architectural standards, production frameworks, and distributed cloud technologies.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === activeTab;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveTab(cat.id);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-400 via-indigo-600 to-amber-400 text-slate-950 font-black shadow-lg shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/5 gap-2">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2 uppercase tracking-wide">
                {currentCategory.title}
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5 font-light">
                {currentCategory.description}
              </p>
            </div>
            <span className="text-xs text-cyan-400 font-mono uppercase tracking-widest">
              {currentCategory.skills.length} Calibrated Capabilities
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCategory.skills.map((skill, index) => (
              <div
                key={index}
                onMouseEnter={() => sound.playHover()}
                className="p-4 rounded-xl bg-black/50 border border-white/5 hover:border-cyan-500/40 transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-slate-100 group-hover:text-cyan-300 transition-colors uppercase text-sm tracking-wide">
                    {skill.name}
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-white/5 text-slate-300 border border-white/10">
                    {skill.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-light">{skill.experience}</p>
                <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono">
                  <span className="text-slate-500 uppercase">Grade:</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-bold">
                    <CheckCircle className="w-3 h-3" />
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
