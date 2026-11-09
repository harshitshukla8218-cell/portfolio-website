import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/soundEffects';

interface CommandOutput {
  command: string;
  output: string | React.ReactNode;
}

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'sys.init --profile',
      output: (
        <div className="space-y-1">
          <p className="text-cyan-300 font-bold uppercase tracking-wider">
            HARSH SHUKLA // SYSTEM ARCHITECT & FULL-STACK ENGINEER
          </p>
          <p className="text-slate-300 font-light">
            Core specializations: FastAPI, Python microservices, React 19, distributed cloud infrastructure.
          </p>
          <p className="text-amber-400 text-xs font-mono">
            Type <span className="text-white font-bold underline">'help'</span> to view available terminal directives.
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    sound.playClick();
    let resultNode: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        resultNode = (
          <div className="space-y-1 text-slate-300 font-mono text-xs">
            <p className="text-cyan-300 font-bold mb-1 uppercase tracking-wider">DIRECTIVES LIST:</p>
            <p><span className="text-cyan-400 font-bold w-28 inline-block">whoami</span> - Identity & engineering philosophy</p>
            <p><span className="text-cyan-400 font-bold w-28 inline-block">skills</span> - Calibrated technical arsenal</p>
            <p><span className="text-cyan-400 font-bold w-28 inline-block">projects</span> - Production-deployed epics</p>
            <p><span className="text-cyan-400 font-bold w-28 inline-block">writings</span> - Technical Medium essays (HFT / systems)</p>
            <p><span className="text-cyan-400 font-bold w-28 inline-block">contact</span> - Secure communication frequency</p>
            <p><span className="text-cyan-400 font-bold w-28 inline-block">hire</span> - Execute high-priority offer protocol</p>
            <p><span className="text-cyan-400 font-bold w-28 inline-block">clear</span> - Flush terminal buffer</p>
          </div>
        );
        break;

      case 'whoami':
        resultNode = (
          <p className="text-slate-300 font-light">
            Harsh Shukla: Full-Stack Engineer bridging high-throughput asynchronous backends (FastAPI, Python, Node.js) with fluid, modern frontends (React 19, TypeScript, Tailwind) and distributed cloud persistence.
          </p>
        );
        break;

      case 'skills':
        resultNode = (
          <div className="text-slate-300 space-y-1 font-mono text-xs">
            <p className="text-cyan-400 font-semibold">● BACKEND: FastAPI, Python, Node.js, Express, REST/OpenAPI, JWT, RBAC</p>
            <p className="text-indigo-400 font-semibold">● FRONTEND: React 19, TypeScript, Tailwind CSS, Vite, HTML5/CSS3, State Engines</p>
            <p className="text-amber-400 font-semibold">● DATA: PostgreSQL, Neon Serverless DB, MongoDB Atlas, SQLite, Alembic</p>
            <p className="text-emerald-400 font-semibold">● TOOLING: Git, Docker, Postman, Vercel, Render, Swagger, CI/CD</p>
          </div>
        );
        break;

      case 'writings':
        resultNode = (
          <div className="text-slate-300 space-y-1 font-mono text-xs">
            <p className="text-amber-400 font-bold">Medium Technical Articles:</p>
            <p>1. Designing High-Frequency Trading (HFT) Architecture & Low-Latency Engines</p>
            <p>2. Global Payment System Architecture & Data Counting at Scale</p>
            <p>3. Asynchronous Task Orchestration with Modern Python & FastAPI</p>
          </div>
        );
        break;

      case 'projects':
        resultNode = (
          <div className="text-slate-300 space-y-2 font-mono text-xs">
            <div>
              <p className="text-cyan-300 font-bold">ACT I: Smart Inventory & Procurement System</p>
              <p className="text-slate-400">FastAPI + React 19 + Neon Postgres. Multi-warehouse tracking, vendor price benchmarking (Amazon, Flipkart, Meesho).</p>
            </div>
            <div>
              <p className="text-cyan-300 font-bold">ACT II: Full-Stack Developer Platform & Nodemailer Pipeline</p>
              <p className="text-slate-400">Node.js + Express + MongoDB Atlas. Dynamic mailer and portfolio backend.</p>
            </div>
            <div>
              <p className="text-cyan-300 font-bold">ACT III: Taskflow State Machine</p>
              <p className="text-slate-400">High-speed sprint and task orchestration engine.</p>
            </div>
          </div>
        );
        break;

      case 'contact':
        resultNode = (
          <div className="text-slate-300 space-y-1 font-mono text-xs">
            <p>📧 Direct Email: <a href="mailto:harshitshukla8218@gmail.com" className="text-cyan-400 underline">harshitshukla8218@gmail.com</a></p>
            <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/harsh-shukla-214196364" target="_blank" rel="noreferrer" className="text-cyan-400 underline">harsh-shukla-214196364</a></p>
            <p>🐙 GitHub: <a href="https://github.com/harshitshukla8218-cell" target="_blank" rel="noreferrer" className="text-cyan-400 underline">harshitshukla8218-cell</a></p>
          </div>
        );
        break;

      case 'hire':
        sound.playSuccess();
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#00f0ff', '#f59e0b', '#8b5cf6', '#10b981', '#ffffff'],
        });
        resultNode = (
          <div className="p-3.5 bg-emerald-950/70 border border-emerald-500/50 rounded-xl text-emerald-300 space-y-1 font-mono">
            <p className="font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              HIRE PROTOCOL CONFIRMED! LET'S BUILD THE NEXT BIG THING.
            </p>
            <p className="text-xs text-slate-300">
              Drop an email immediately to <strong className="text-white">harshitshukla8218@gmail.com</strong> or ping on LinkedIn!
            </p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        resultNode = (
          <p className="text-rose-400 font-mono">
            unknown directive: '{cmd}'. Type <span className="text-cyan-300 font-bold underline">'help'</span> for reference.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: inputVal, output: resultNode }]);
    setInputVal('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section id="terminal" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Scene 04 // Cyber Command Terminal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            INTERACTIVE <span className="text-gradient-cyan">DIRECTOR'S CLI</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Query system parameters, skills, and credentials directly via interactive shell.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl glass-panel border border-white/10 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          {/* Top Bar */}
          <div className="px-4 py-3 bg-black/80 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              <span className="ml-2 text-slate-400 text-xs">guest@harsh-shukla-core: ~</span>
            </div>
            <div className="text-[11px] text-slate-500 uppercase tracking-widest">
              ZSH • TELEMETRY ACTIVE
            </div>
          </div>

          {/* Console Output Area */}
          <div className="p-6 min-h-[280px] max-h-[380px] overflow-y-auto space-y-4 bg-black/70">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-cyan-400 font-bold">❯</span>
                  <span className="text-slate-100 font-semibold">{item.command}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Prompt Input Form */}
          <form
            onSubmit={handleCommand}
            className="px-4 py-3.5 bg-black border-t border-white/5 flex items-center gap-3"
          >
            <span className="text-cyan-400 font-bold">❯</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Try 'help', 'skills', 'writings', 'projects', or 'hire'..."
              className="flex-1 bg-transparent text-slate-100 placeholder:text-slate-600 focus:outline-none font-mono text-xs sm:text-sm"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 transition-colors cursor-pointer"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
