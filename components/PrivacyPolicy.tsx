import React from 'react';
import { TranslationStrings } from '../types';

interface Props {
  t: TranslationStrings;
  onBack: () => void;
}

const PrivacyPolicy: React.FC<Props> = ({ t, onBack }) => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-8 transition-colors group"
      >
        <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </button>

      <h1 className="text-4xl font-bold mb-8">{t.footer.privacy}</h1>
      
      <div className="space-y-8 text-slate-300 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-4">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us when you contact us via our contact form or WhatsApp. 
            This may include your name, email address, and any other information you choose to provide.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, 
            to communicate with you, and to respond to your comments and questions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">3. Data Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, 
            misuse and unauthorized access, disclosure, alteration, and destruction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">4. Third-Party Services</h2>
          <p>
            Our website uses third-party services like WhatsApp and Formspree for communication. 
            We recommend reviewing their respective privacy policies to understand how they handle your data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at support@iptvinov.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;