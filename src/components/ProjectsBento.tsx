import { useState } from 'react';
import {
  ExternalLink,
  CheckCircle,
  Database,
  Server,
  Layers,
  ArrowUpRight,
  X,
  Clapperboard,
  Film,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { sound } from '../utils/soundEffects';

interface Project {
  id: string;
  act: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  tech: string[];
  metrics: string[];
  features: string[];
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    highlights: string[];
  };
  githubUrl: string;
  liveUrl?: string;
  highlight?: boolean;
}

export default function ProjectsBento() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'fullstack' | 'backend'>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'smart-inventory',
      act: 'ACT I // THE ENTERPRISE ENGINE',
      title: 'Smart Inventory & Procurement Management System',
      badge: 'Flagship Enterprise App',
      tagline: 'Automated Availability Checking, Multi-Warehouse Tracking & Vendor Benchmarking',
      description:
        'A production-grade, multi-tenant enterprise ERP platform. Automates stock availability calculations, triggers automated shortages detection, compares real-time vendor prices across Amazon Business, Flipkart Commerce, and Meesho, generates purchase orders, and auto-allocates incoming stock against active sales orders.',
      tech: ['FastAPI', 'Python', 'React 19', 'TypeScript', 'Neon PostgreSQL', 'Tailwind CSS', 'Alembic', 'Vite'],
      metrics: [
        '5 Pre-Configured Role Personas (Admin, Warehouse, Procurement, Sales, Manager)',
        '10 Real-time KPI Dashboards (Stock movement, spend trends, replenish alerts)',
        '3 Multi-Vendor Price Comparison Connectors (Amazon, Flipkart, Meesho)',
        'Instant Shortage Detection & 1-Click PO Generation Flow',
      ],
      features: [
        'Executive Real-time Dashboard with stock state ratio donut charts and spend trends',
        'Automated product shortage detection with instantaneous allocation readiness check',
        'Automatic Vendor Search & Price Comparison with lowest-cost vendor recommendation',
        'Warehouse Inward Gate Receipts & QC Inspection verification pipeline',
        'Automatic FIFO/Priority product allocation against pending sales orders',
      ],
      architecture: {
        frontend: 'Modern React with TypeScript, Vite, Tailwind CSS, Lucide icons & Oxlint',
        backend: 'FastAPI Python asynchronous API with interactive Swagger / OpenAPI docs',
        database: 'Neon Serverless PostgreSQL & SQLite with Alembic database migrations',
        highlights: [
          'Pre-seeded demo personas with 1-click header switcher',
          'Role-Based Access Control (RBAC) across all endpoints',
          'Automated background price benchmark simulation',
        ],
      },
      githubUrl: 'https://github.com/harshitshukla8218-cell',
      liveUrl: 'http://localhost:5173',
      highlight: true,
    },
    {
      id: 'fullstack-portfolio-api',
      act: 'ACT II // THE DATA PIPELINE',
      title: 'Full-Stack Developer Hub & Mailing Pipeline',
      badge: 'Node / MERN Stack',
      tagline: 'Contact API Pipeline with MongoDB Atlas & Nodemailer Backend',
      description:
        'An interactive full-stack web platform built with Node.js and Express.js, featuring automated email notifications via Nodemailer, persistent visitor inquiry tracking on MongoDB Atlas, and responsive UI components.',
      tech: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Nodemailer', 'JavaScript', 'REST APIs'],
      metrics: [
        '100% Reliable Nodemailer Delivery',
        'MongoDB Atlas Cloud Storage for Inquiries',
        'Clean Separation of Concerns with Express Routing',
      ],
      features: [
        'Secure contact form handling with input sanitization',
        'Dynamic mail templating with error fallback mechanisms',
        'RESTful API endpoints for inquiry management',
      ],
      architecture: {
        frontend: 'Responsive HTML5/CSS3 with modern vanilla JS interaction hooks',
        backend: 'Express.js server with JSON parsing middleware and CORS configuration',
        database: 'MongoDB Atlas NoSQL cloud clusters with Mongoose schemas',
        highlights: ['Environment variable security', 'Production ready on cloud PaaS'],
      },
      githubUrl: 'https://github.com/harshitshukla8218-cell/portfolio-website',
      liveUrl: 'https://harshitshukla8218-cell.github.io/portfolio-website/',
    },
    {
      id: 'taskflow-engine',
      act: 'ACT III // THE STATE MACHINE',
      title: 'Taskflow - Visual Workflow & State Machine',
      badge: 'Productivity & Tooling',
      tagline: 'Lightweight, high-performance task management and Kanban pipeline',
      description:
        'A clean productivity interface designed for tracking sprints, priorities, and project states. Features smooth drag-and-drop card logic, local state persistence, and minimalist dark UI aesthetics.',
      tech: ['JavaScript (ES6+)', 'HTML5', 'Modern CSS Grid', 'Local Storage Engine'],
      metrics: [
        'Zero Dependencies for Instant Sub-millisecond Loads',
        'Persistent Local Workflow Engine',
        'Clean Responsive Design',
      ],
      features: [
        'Dynamic task creation with priority tagging and status filters',
        'Real-time task counter and completion progress bars',
        'Optimized DOM rendering without heavy runtime overhead',
      ],
      architecture: {
        frontend: 'Vanilla Modern JavaScript with CSS custom properties and Flexbox/Grid',
        backend: 'Client-side state manager with serialized storage sync',
        database: 'Browser LocalStorage engine',
        highlights: ['Instant render time', 'No build step required'],
      },
      githubUrl: 'https://github.com/harshitshukla8218-cell',
    },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : selectedFilter === 'fullstack'
      ? projects.filter((p) => p.tech.includes('React 19') || p.tech.includes('Node.js'))
      : projects.filter((p) => p.tech.includes('FastAPI') || p.tech.includes('Express.js'));

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 pb-6 border-b border-white/5">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
              <Clapperboard className="w-3.5 h-3.5" />
              <span>Scene 02 // Featured Epics</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase">
              FEATURED <span className="text-gradient-cyan">WORKS & ARCHITECTURES</span>
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base font-light">
              Production systems, distributed APIs, and full-stack solutions engineered by Harsh Shukla.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-slate-950/80 p-1.5 rounded-xl border border-white/10">
            {(['all', 'fullstack', 'backend'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  sound.playClick();
                  setSelectedFilter(filter);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project) => {
            const isFlagship = project.id === 'smart-inventory';

            return (
              <div
                key={project.id}
                onMouseEnter={() => sound.playHover()}
                className={`rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                  isFlagship
                    ? 'lg:col-span-12 bg-gradient-to-br from-slate-950 via-[#0a0d18] to-slate-950'
                    : 'lg:col-span-6 bg-slate-950/60'
                }`}
              >
                <div className="space-y-6">
                  {/* Scene Marker & Links */}
                  <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-white/5">
                    <div className="flex items-center gap-2 font-mono text-[11px] text-cyan-400 uppercase tracking-widest">
                      <Film className="w-3.5 h-3.5" />
                      <span>{project.act}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.playClick()}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => sound.playClick()}
                          className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 transition-colors border border-cyan-500/30"
                          title="View Live App"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30 uppercase">
                        {project.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                      {project.title}
                    </h3>
                    <p className="text-cyan-300/90 text-sm font-medium mt-1 font-mono">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Key Highlights Metrics */}
                  <div
                    className={`grid ${
                      isFlagship ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2'
                    } gap-3 pt-2`}
                  >
                    {project.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-black/60 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300"
                      >
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech tags + Architecture Details Trigger */}
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-white/5 text-slate-300 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      sound.playClick();
                      setActiveModalProject(project);
                    }}
                    onMouseEnter={() => sound.playHover()}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors self-start sm:self-auto cursor-pointer"
                  >
                    <span>Inspect System Blueprint</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Architecture Deep-Dive Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
          <div className="relative w-full max-w-2xl bg-[#080b14] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => {
                sound.playClick();
                setActiveModalProject(null);
              }}
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase tracking-widest">
                ARCHITECTURAL BLUEPRINT
              </span>
              <h3 className="text-2xl font-black text-white uppercase">{activeModalProject.title}</h3>
              <p className="text-sm text-slate-400 font-mono">{activeModalProject.tagline}</p>
            </div>

            {/* Architecture Details */}
            <div className="mt-6 space-y-4 text-sm font-light">
              <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-2">
                <h4 className="font-bold text-cyan-400 flex items-center gap-2 font-mono">
                  <Server className="w-4 h-4" />
                  Backend Engine & Microservices
                </h4>
                <p className="text-slate-300">{activeModalProject.architecture.backend}</p>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-2">
                <h4 className="font-bold text-indigo-400 flex items-center gap-2 font-mono">
                  <Layers className="w-4 h-4" />
                  Frontend Layer & Micro-Interactions
                </h4>
                <p className="text-slate-300">{activeModalProject.architecture.frontend}</p>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-white/5 space-y-2">
                <h4 className="font-bold text-emerald-400 flex items-center gap-2 font-mono">
                  <Database className="w-4 h-4" />
                  Database Cluster & Schemas
                </h4>
                <p className="text-slate-300">{activeModalProject.architecture.database}</p>
              </div>

              <div className="space-y-2 pt-2">
                <h5 className="font-bold text-white font-mono uppercase text-xs">Production Highlights:</h5>
                <ul className="list-disc list-inside text-slate-300 space-y-1 text-xs">
                  {activeModalProject.architecture.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3 pt-4 border-t border-white/5">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 hover:brightness-110 flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                View Source Repository
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
