import { useState } from 'react';
import {
  Mail,
  Send,
  Copy,
  Check,
  MapPin,
  Clock,
  ArrowUpRight,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const email = 'harshitshukla8218@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00f0ff', '#38bdf8', '#10b981'],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#00f0ff', '#38bdf8', '#818cf8', '#10b981'],
    });

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.open(mailtoUrl, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Contact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Connect
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether you have an opportunity, a freelance project, or just want to chat about web development and software engineering, feel free to drop me a note.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <p className="text-xs text-slate-400">Email Address</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm sm:text-base font-semibold text-slate-200 hover:text-cyan-400 truncate block transition-colors font-mono"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopy}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all shrink-0 cursor-pointer border border-slate-700/60"
                title="Copy email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Network Links */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.linkedin.com/in/harsh-shukla-214196364"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-5 h-5 text-sky-400" />
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-sky-300">
                    LinkedIn
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-300 transition-colors" />
              </a>

              <a
                href="https://github.com/harshitshukla8218-cell"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-5 h-5 text-slate-300" />
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-white">
                    GitHub
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Meta Card */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Location: India (Open to Remote Worldwide)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Quick Response Time</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/70 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Prepared</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your email client has been launched with your note. You can also write directly to{' '}
                    <strong className="text-cyan-400 font-mono">{email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <h3 className="text-lg font-bold text-white mb-2">Send a Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 mb-1 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Project Discussion"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1 font-medium">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Harsh, I'd like to get in touch regarding..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl font-semibold text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
