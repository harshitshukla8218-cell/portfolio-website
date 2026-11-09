import { FolderGit2, Trophy, Code2, Globe2 } from 'lucide-react';

export default function StatsBanner() {
  const stats = [
    {
      icon: FolderGit2,
      value: '5+ Projects',
      label: 'Live Deployed Applications',
      subtext: 'Hackathon, client & open-source projects',
    },
    {
      icon: Trophy,
      value: 'Smart India Hackathon',
      label: 'National Finalist System',
      subtext: 'Built AI anomaly detection for MPLADS',
    },
    {
      icon: Code2,
      value: 'Modern Full-Stack',
      label: 'React, TypeScript & Python',
      subtext: 'FastAPI, Node.js, PostgreSQL, Tailwind',
    },
    {
      icon: Globe2,
      value: 'Client & Live Work',
      label: 'Production Deliverables',
      subtext: 'E-commerce, AI assistants & calculation tools',
    },
  ];

  return (
    <section className="py-10 border-y border-slate-800/80 bg-slate-950/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-slate-800 text-cyan-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white tracking-tight">{stat.value}</h4>
                    <p className="text-xs text-slate-400">{stat.label}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 font-mono pt-1">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
