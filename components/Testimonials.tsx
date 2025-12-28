import React from 'react';
import { TranslationStrings } from '../types';

interface Props {
  t: TranslationStrings;
}

const Testimonials: React.FC<Props> = ({ t }) => {
  const feedbacks = [
    { id: 1, text: "Super service, fast activation! Highly recommend.", author: "Marco S.", time: "10:24 AM" },
    { id: 2, text: "Qualité d'image 4K incroyable, surtout pour le foot. Aucun bug.", author: "Julien R.", time: "11:45 AM" },
    { id: 3, text: "El soporte por WhatsApp respondió en minutos. Muy profesionales.", author: "Sofia G.", time: "02:10 PM" },
    { id: 4, text: "أفضل خدمة رأيتها. القنوات ثابتة والدعم الفني سريع جداً.", author: "Ahmed K.", time: "09:30 PM" },
    { id: 5, text: "Renewed for the 3rd time now. Top reliability for the family.", author: "Emma W.", time: "08:15 AM" },
    { id: 6, text: "Toutes les chaînes de sport disponibles en UHD, c'est parfait.", author: "David B.", time: "07:50 PM" },
  ];

  return (
    <section className="py-20 overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.testimonials.title}</h2>
        <p className="text-slate-400">{t.testimonials.subtitle}</p>
      </div>

      <div className="relative flex overflow-x-hidden w-full md:w-3/4 lg:w-1/2 mx-auto">
        <div className="py-12 animate-marquee whitespace-nowrap flex gap-12">
          {[...feedbacks, ...feedbacks].map((item, idx) => (
            <div
              key={idx}
              className="inline-block w-72 sm:w-80 group cursor-default"
            >
              <div className="bg-[#0b141a] rounded-2xl border border-white/5 shadow-2xl overflow-hidden transform transition-transform hover:scale-105">
                {/* WhatsApp Chat Header Simulation */}
                <div className="bg-[#202c33] p-3 flex items-center gap-3 border-b border-white/5">
                  <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-xs font-bold text-white">
                    {item.author[0]}
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold leading-none">{item.author}</p>
                    <p className="text-[10px] text-green-400 mt-1">{t.testimonials.status}</p>
                  </div>
                </div>
                
                {/* Chat Body Simulation */}
                <div className="p-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
                  <div className={`bg-[#005c4b] p-3 rounded-lg shadow-md max-w-[90%] relative ${document.documentElement.dir === 'rtl' ? 'mr-auto rounded-tr-none' : 'ml-auto rounded-tl-none'}`}>
                    <p className="text-white text-sm whitespace-normal leading-relaxed">
                      {item.text}
                    </p>
                    <div className="flex justify-end items-center gap-1 mt-1">
                      <span className="text-[10px] text-white/60">{item.time}</span>
                      <svg className="w-3 h-3 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.334 3.183c-.469-.434-1.218-.41-1.652.059l-11.85 12.821-4.707-4.43c-.469-.441-1.219-.441-1.688 0l-.134.126c-.469.441-.469 1.156 0 1.598l6.195 5.833.134.127a1.18 1.18 0 00.844.351c.319 0 .611-.129.822-.331l12.169-14.996.126-.155c.346-.46.319-1.127-.259-1.579l-.101-.081z"/>
                        <path d="M12.166 16.004L10.832 17.338l6.195 5.833.134.127a1.18 1.18 0 00.844.351c.319 0 .611-.129.822-.331l12.169-14.996.126-.155c.346-.46.319-1.127-.259-1.579l-.101-.081c-.469-.434-1.218-.41-1.652.059l-11.85 12.821z" transform="translate(-5, -2)"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;