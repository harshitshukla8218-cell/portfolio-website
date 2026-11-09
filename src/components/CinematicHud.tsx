import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Eye } from 'lucide-react';
import { sound } from '../utils/soundEffects';

interface CinematicHudProps {
  cinemaMode: boolean;
  onToggleCinemaMode: () => void;
}

export default function CinematicHud({ cinemaMode, onToggleCinemaMode }: CinematicHudProps) {
  const [timecode, setTimecode] = useState('00:00:00:00');
  const [sfxOn, setSfxOn] = useState(true);

  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const hrs = String(Math.floor(frame / (60 * 60 * 24))).padStart(2, '0');
      const mins = String(Math.floor((frame / (60 * 60)) % 60)).padStart(2, '0');
      const secs = String(Math.floor((frame / 60) % 60)).padStart(2, '0');
      const frames = String(frame % 60).padStart(2, '0');
      setTimecode(`${hrs}:${mins}:${secs}:${frames}`);
    }, 1000 / 30);

    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    const next = !sfxOn;
    setSfxOn(next);
    sound.enabled = next;
    if (next) sound.playClick();
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none px-4 sm:px-8 py-2.5 flex items-center justify-between text-[11px] font-mono text-slate-400 select-none">
      {/* Top Left: REC + Timecode */}
      <div className="flex items-center gap-3 pointer-events-auto bg-slate-950/70 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800/80 shadow-lg">
        <span className="flex items-center gap-1.5 text-rose-500 font-bold uppercase tracking-wider text-[10px]">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse inline-block" />
          REC
        </span>
        <span className="text-slate-300 font-mono tracking-widest">{timecode}</span>
        <span className="hidden sm:inline text-slate-600">|</span>
        <span className="hidden sm:inline text-cyan-400">60.00 FPS</span>
      </div>

      {/* Top Right: Optics & SFX Controls */}
      <div className="flex items-center gap-2 pointer-events-auto bg-slate-950/70 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800/80 shadow-lg">
        <span className="hidden md:inline text-slate-400 mr-1">
          24mm ANAMORPHIC • T1.5
        </span>
        <button
          onClick={onToggleCinemaMode}
          onMouseEnter={() => sound.playHover()}
          className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full transition-all cursor-pointer ${
            cinemaMode
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'hover:text-slate-200'
          }`}
          title="Toggle 2.39:1 Cinema Letterbox Mode"
        >
          <Eye className="w-3.5 h-3.5" />
          <span className="text-[10px] uppercase font-semibold">
            {cinemaMode ? 'Scope [2.39:1]' : 'Cinema View'}
          </span>
        </button>

        <span className="text-slate-700">|</span>

        <button
          onClick={toggleSound}
          onMouseEnter={() => sound.playHover()}
          className="flex items-center gap-1 hover:text-cyan-400 transition-colors p-0.5 cursor-pointer"
          title={sfxOn ? 'Mute Interactive Sound Effects' : 'Enable Interactive Sound Effects'}
        >
          {sfxOn ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] text-emerald-400 font-bold">SFX ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-[10px] text-slate-500">SFX OFF</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
