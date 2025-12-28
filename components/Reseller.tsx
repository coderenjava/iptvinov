
import React from 'react';
import { TranslationStrings } from '../types';

interface Props {
  t: TranslationStrings;
}

const Reseller: React.FC<Props> = ({ t }) => {
  const plans = [
    { id: 'standard', ...t.reseller.plans.standard },
    { id: 'super', ...t.reseller.plans.super },
  ];

  const handleBecomeReseller = (planName: string) => {
    const text = `Hello IPTVinov, I'm interested in the ${planName} plan. Could you provide more information on how to become a reseller?`;
    window.open(`https://wa.me/33773989112?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="reseller" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t.reseller.title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{t.reseller.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col ${
                plan.badge
                  ? 'bg-indigo-600/10 border-indigo-500 shadow-2xl shadow-indigo-500/10 scale-105 z-10'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-[10px] font-bold rounded-full uppercase tracking-widest whitespace-nowrap">
                  {plan.badge}
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                <span className="text-slate-400">/ Minimum</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <svg className={`w-5 h-5 flex-shrink-0 ${plan.badge ? 'text-indigo-400' : 'text-green-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleBecomeReseller(plan.name)}
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.badge
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {t.reseller.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reseller;