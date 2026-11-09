import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800/80 bg-slate-950/60 relative z-10 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-400 text-slate-950 flex items-center justify-center font-bold text-xs">
              HS
            </div>
            <div>
              <p className="font-semibold text-white">Harsh Shukla</p>
              <p className="text-[11px] text-slate-400">Full-Stack Software Engineer</p>
            </div>
          </div>

          <div className="flex items-center gap-5 text-xs">
            <a
              href="https://github.com/harshitshukla8218-cell"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-shukla-214196364"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:harshitshukla8218@gmail.com"
              className="hover:text-slate-200 transition-colors"
            >
              Email
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            title="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Harsh Shukla. All rights reserved.</p>
          <p>Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
