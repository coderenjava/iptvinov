
import React from 'react';
import { TranslationStrings } from '../types';

interface Props {
  t: TranslationStrings;
  onPrivacyClick: () => void;
}

const Footer: React.FC<Props> = ({ t, onPrivacyClick }) => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <span className="text-xl font-bold">IPTV<span className="text-indigo-500">inov</span></span>
            </div>
            <button
              onClick={onPrivacyClick}
              className="text-slate-500 hover:text-indigo-400 text-sm transition-colors"
            >
              {t.footer.privacy}
            </button>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-slate-500 font-medium uppercase tracking-widest">{t.footer.social}</p>
            <div className="flex items-center gap-6">
              <a 
                href="https://facebook.com/iptvinov" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white transition-all transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a 
                href="https://tiktok.com/@iptvinov" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-white transition-all transform hover:scale-110"
                aria-label="TikTok"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.032 2.612.019 3.847.156.085 1.561.694 3.062 1.783 4.159.991.996 2.302 1.636 3.731 1.838.033 1.25-.017 2.502-.149 3.743-1.16-.065-2.29-.387-3.325-.945-1.045-.563-1.942-1.353-2.614-2.288v9.423c-.006 1.096-.282 2.176-.803 3.134-.521.958-1.282 1.758-2.207 2.316-.925.558-1.986.84-3.076.819-1.091-.022-2.158-.345-3.093-.936-.934-.591-1.688-1.425-2.184-2.417-.497-.992-.729-2.09-.672-3.185.057-1.094.4-2.152.993-3.064.593-.912 1.417-1.636 2.39-2.098.67-.319 1.389-.526 2.124-.616v4.06c-.332.062-.656.173-.956.331-.475.251-.87.625-1.144 1.084-.275.459-.418.986-.416 1.523.003.538.151 1.063.43 1.519.278.455.679.822 1.16 1.06.48.239 1.018.337 1.554.283.537-.054 1.049-.25 1.482-.569.432-.32.766-.755.966-1.258.2-.503.275-1.049.219-1.583V0h3.33z"/></svg>
              </a>
            </div>
          </div>

          <p className="text-slate-500 text-sm">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
