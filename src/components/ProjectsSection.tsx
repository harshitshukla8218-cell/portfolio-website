import { useState } from 'react';
import {
  ExternalLink,
  CheckCircle,
  ArrowUpRight,
  FolderGit2,
  Sparkles,
  ShoppingBag,
  Code2,
  ShieldCheck,
  Building2,
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  context: string;
  brief: string;
  description: string;
  tech: string[];
  keyHighlights: string[];
  icon: any;
  badge: string;
  githubUrl: string;
  liveUrl?: string;
}

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects: ProjectItem[] = [
    {
      id: 'mplads-sentinel',
      title: 'MPLADS AI Sentinel',
      category: 'Smart India Hackathon',
      context: 'National Hackathon Project',
      brief:
        'An AI-driven anomaly and fraud detection platform built for the Smart India Hackathon (SIH) to monitor, audit, and detect irregularities in the Member of Parliament Local Area Development Scheme.',
      description:
        'Engineered to solve the SIH problem statement on public fund transparency. It audits developmental project expenditures under the MPLADS scheme, detects duplicate fund claims, identifies ghost projects using geospatial verification, and flags statistical spending anomalies in real time.',
      tech: ['React', 'TypeScript', 'Node.js', 'AI Anomaly Detection', 'Tailwind CSS', 'Geospatial Mapping'],
      keyHighlights: [
        'AI anomaly detection models identifying fund misallocation & duplicate billings',
        'Geospatial verification dashboard to audit physical project milestones on maps',
        'Transparent public portal tracking MP constituency development metrics and risk ratings',
        'Automated alert triggers and audit trail logging for suspicious financial activity',
      ],
      icon: ShieldCheck,
      badge: 'Smart India Hackathon (SIH)',
      githubUrl: 'https://github.com/harshitshukla8218-cell',
      liveUrl: 'https://mplads-ai-sentinel-final.vercel.app/',
    },
    {
      id: 'talk-to-jyotisha',
      title: 'Talk to Jyotisha',
      category: 'Calculations & Astrology',
      context: 'Vedic Astrology Platform',
      brief:
        'Precision astronomical calculation platform utilizing NASA JPL ephemeris, Skyfield, and Lahiri Sidereal conversion for automated birth chart generation and consultation management.',
      description:
        'Calculates exact planetary coordinates using Skyfield and JPL DE421 ephemeris based on exact birthplace geocoding. Automatically renders private Kundli chart PDFs, handles consultation scheduling, and manages user birth profiles with SQLite/PostgreSQL persistence.',
      tech: ['Python', 'Flask', 'Skyfield', 'JPL Ephemeris', 'PostgreSQL', 'SQLite', 'ReportLab PDF'],
      keyHighlights: [
        'Astronomical calculations for planetary longitude using JPL DE421 ephemeris',
        'Lahiri sidereal conversion with whole-sign Vedic house systems',
        'Automated generation and secure streaming of private Kundli report PDFs',
        'Geocoding integration with OpenStreetMap Nominatim for precise coordinates',
      ],
      icon: Sparkles,
      badge: 'Astronomical Engine',
      githubUrl: 'https://github.com/harshitshukla8218-cell',
      liveUrl: 'https://talk-2-jyotisha.vercel.app/',
    },
    {
      id: 'hos-fashion',
      title: 'HOS (House of Styles)',
      category: 'Brand Fashion & E-Commerce',
      context: 'Fashion Brand Storefront',
      brief:
        'Modern brand storefront created for the HOS fashion label, featuring curated seasonal lookbooks, interactive apparel catalogs, and a fluid shopping experience.',
      description:
        'A digital brand experience built for HOS fashion. Combines clean typography with high-performance catalog browsing, responsive grid layouts, intuitive shopping bag management, and fast CDN image loading.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Responsive UI', 'E-Commerce'],
      keyHighlights: [
        'Minimalist fashion layout with curated apparel lookbooks and product galleries',
        'Interactive category and silhouette filtering with instant page transitions',
        'Streamlined customer shopping cart and checkout intent flows',
        'Fully responsive design optimized for mobile, tablet, and desktop viewports',
      ],
      icon: ShoppingBag,
      badge: 'Brand Fashion Store',
      githubUrl: 'https://github.com/harshitshukla8218-cell',
      liveUrl: 'https://hos-dusky.vercel.app/',
    },
    {
      id: 'heena-arora',
      title: 'Heena Arora Fashion',
      category: 'Client Production',
      context: 'Designer Client Website',
      brief:
        'Production luxury couture brand platform engineered for client Heena Arora, integrating bespoke fashion consultations and Google Gemini AI styling assistance.',
      description:
        'A bespoke fashion platform delivered for fashion designer client Heena Arora. Powered by React 19, TypeScript, and Vite, featuring an AI styling concierge integrated with Google Gemini API, virtual try-on previews, and personalized bridal consultation bookings.',
      tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Google Gemini API', 'Vite'],
      keyHighlights: [
        'Live production client website delivered for fashion designer Heena Arora',
        'AI styling concierge powered by Google Gemini multimodal API',
        'Virtual try-on preview pipeline with secure server-side API handling',
        'Editorial couture collection browsing with detailed fabric and garment views',
      ],
      icon: Building2,
      badge: 'Client Brand Platform',
      githubUrl: 'https://github.com/harshitshukla8218-cell',
      liveUrl: 'https://heenaarora.vercel.app/',
    },
    {
      id: 'ai-code-reviewer',
      title: 'AI Code Reviewer',
      category: 'Developer Tools',
      context: 'College Engineering Project',
      brief:
        'College capstone project built to automate source-code review, syntax inspection, algorithmic complexity evaluation, and bug detection.',
      description:
        'An academic developer platform built during college to assist students and programmers with code quality. Analyzes code snippets across multiple languages using LLMs to detect syntax bugs, identify potential runtime exceptions, flag security oversights, and suggest clean refactors.',
      tech: ['Python', 'FastAPI / Node', 'React', 'TypeScript', 'LLM Analysis', 'AST Parser'],
      keyHighlights: [
        'College project providing automated static and structural code reviews',
        'LLM-assisted detection of runtime bugs, security oversights, and logic bottlenecks',
        'Time and space complexity scoring with clear optimization explanations',
        'Clean web editor interface for pasting code or uploading source files directly',
      ],
      icon: Code2,
      badge: 'College Engineering Project',
      githubUrl: 'https://github.com/harshitshukla8218-cell',
      liveUrl: 'https://ai-code-reviewer-eight-cyan.vercel.app/',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fashion', label: 'Fashion & Brand Stores' },
    { id: 'hackathon-ai', label: 'Hackathon & AI Systems' },
    { id: 'systems', label: 'Calculations & Tools' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : selectedCategory === 'fashion'
      ? projects.filter((p) => p.id === 'hos-fashion' || p.id === 'heena-arora')
      : selectedCategory === 'hackathon-ai'
      ? projects.filter((p) => p.id === 'mplads-sentinel' || p.id === 'ai-code-reviewer')
      : projects.filter((p) => p.id === 'talk-to-jyotisha' || p.id === 'ai-code-reviewer');

  return (
    <section id="projects" className="py-20 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
              A selection of live client websites, hackathon systems, and engineering projects I've built.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => {
            const Icon = project.icon;
            const isFullWidth = idx === 0 && selectedCategory === 'all';

            return (
              <div
                key={project.id}
                className={`rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:border-slate-700 hover:shadow-xl ${
                  isFullWidth ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon & Badges */}
                  <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-cyan-400 block">
                          {project.category}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {project.badge}
                        </span>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/60"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 transition-colors border border-cyan-500/30 flex items-center gap-1.5 text-xs font-medium"
                          title="Open Live Website"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Brief */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mt-2 font-normal">
                      {project.brief}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className={`grid ${isFullWidth ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'} gap-2 pt-1`}>
                    {project.keyHighlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 flex items-start gap-2.5 text-xs text-slate-300"
                      >
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Visit Website</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
