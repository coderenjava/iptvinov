
import React, { useState } from 'react';
import { Language, TranslationStrings } from '../types';

interface Props {
  lang: Language;
  setLang: (l: Language) => void;
  t: TranslationStrings;
  onHomeClick: () => void;
}

const Navbar: React.FC<Props> = ({ lang, setLang, t, onHomeClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: t.nav.home, href: '#', onClick: onHomeClick },
    { label: t.nav.features, href: '#features' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={onHomeClick} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-400">
              IPTV<span className="text-indigo-500">inov</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                }}
                className="text-slate-300 hover:text-white transition-colors font-medium text-sm"
              >
                {item.label}
              </a>
            ))}
            
            <div className="flex items-center gap-1 border-l border-white/10 pl-4 ml-2">
              {(['en', 'fr', 'es', 'ar'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 rounded text-xs uppercase font-bold transition-colors ${
                    lang === l ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-white/10 px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block text-lg text-slate-300 hover:text-white"
              onClick={() => {
                if (item.onClick) item.onClick();
                setIsOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
            {(['en', 'fr', 'es', 'ar'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => {
                  setLang(l);
                  setIsOpen(false);
                }}
                className={`flex-1 min-w-[60px] py-2 rounded text-center uppercase font-bold transition-colors ${
                  lang === l ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
