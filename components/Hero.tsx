
import React from 'react';
import { TranslationStrings } from '../types';

interface Props {
  t: TranslationStrings;
}

const Hero: React.FC<Props> = ({ t }) => {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 blur-[120px]">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-indigo-600 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-purple-600 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-sm font-medium mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          High-Speed Servers Active
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
          {t.hero.title}
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-indigo-600/20"
          >
            {t.hero.cta}
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all"
          >
            {t.hero.secondaryCta}
          </a>
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
          <img
            src="https://picsum.photos/seed/iptv-show/1200/600"
            alt="IPTV Preview"
            className="rounded-2xl shadow-2xl border border-white/10 mx-auto w-full max-w-5xl object-cover aspect-[21/9] grayscale-[0.2]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;