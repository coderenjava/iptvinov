
import React, { useState, useEffect } from 'react';
import { TranslationStrings } from '../types';

interface Props {
  t: TranslationStrings;
}

const Contact: React.FC<Props> = ({ t }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  useEffect(() => {
    const newErrors = { name: '', email: '', message: '' };
    if (touched.name && !formData.name.trim()) newErrors.name = t.contact.errorName;
    if (touched.email) {
      if (!formData.email.trim()) newErrors.email = t.contact.errorEmail;
      else if (!validateEmail(formData.email)) newErrors.email = t.contact.errorEmail;
    }
    if (touched.message) {
      if (!formData.message.trim()) newErrors.message = t.contact.errorMessage;
      else if (formData.message.length < 10) newErrors.message = t.contact.errorMessage;
    }
    setErrors(newErrors);
  }, [formData, touched, t]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(formData.email) || !formData.name.trim() || formData.message.length < 10) {
      setTouched({ name: true, email: true, message: true });
      return;
    }

    setStatus('SUBMITTING');

    try {
      // Formspree requires the form data to be sent as FormData or JSON
      const response = await fetch('https://formspree.io/f/xoqkyyyr', { // Placeholder ID - user should replace with their Formspree ID
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `New Lead from IPTVinov: ${formData.name}`,
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', message: '' });
        setTouched({ name: false, email: false, message: false });
        setTimeout(() => setStatus('IDLE'), 6000);
      } else {
        throw new Error('Formspree submission failed');
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback for demo if ID is not set
      setStatus('ERROR');
      setTimeout(() => setStatus('IDLE'), 4000);
    }
  };

  const handleBlur = (field: keyof typeof touched) => {
    setTouched({ ...touched, [field]: true });
  };

  const hasErrors = !!(errors.name || errors.email || errors.message);
  const isFormEmpty = !formData.name || !formData.email || !formData.message;

  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">{t.contact.title}</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                {t.contact.subtitle}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-600/10 rounded-full flex items-center justify-center text-indigo-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div><p className="text-xs text-slate-500 uppercase tracking-wider font-bold">{t.contact.emailUs}</p><p className="font-medium">support@iptvinov.com</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600/10 rounded-full flex items-center justify-center text-green-400">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div><p className="text-xs text-slate-500 uppercase tracking-wider font-bold">{t.contact.whatsapp}</p><p className="font-medium text-slate-100" dir="ltr">+212-724-57-38-95</p></div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-6 relative overflow-hidden">
              {status === 'SUCCESS' && (
                <div className="absolute inset-0 bg-slate-900/95 flex items-center justify-center p-6 z-10 animate-fade-in backdrop-blur-md text-center">
                  <div>
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="text-2xl font-bold text-white mb-2">{t.contact.success}</p>
                  </div>
                </div>
              )}

              {status === 'ERROR' && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 text-red-200 rounded-xl text-center mb-6">
                   Something went wrong. Please use WhatsApp instead.
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium mb-2">{t.contact.name}</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onBlur={() => handleBlur('name')}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-4 py-3 bg-slate-900 border rounded-xl outline-none transition-all ${
                    errors.name ? 'border-red-500 shadow-lg shadow-red-500/10' : 'border-white/10 focus:border-indigo-500'
                  }`}
                  placeholder={t.contact.name}
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t.contact.email}</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onBlur={() => handleBlur('email')}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-4 py-3 bg-slate-900 border rounded-xl outline-none transition-all ${
                    errors.email ? 'border-red-500 shadow-lg shadow-red-500/10' : 'border-white/10 focus:border-indigo-500'
                  }`}
                  placeholder="email@example.com"
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t.contact.message}</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onBlur={() => handleBlur('message')}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className={`w-full px-4 py-3 bg-slate-900 border rounded-xl outline-none transition-all resize-none ${
                    errors.message ? 'border-red-500 shadow-lg shadow-red-500/10' : 'border-white/10 focus:border-indigo-500'
                  }`}
                  placeholder={t.contact.message}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-500 font-medium">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'SUBMITTING' || hasErrors || isFormEmpty}
                className={`w-full py-4 font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                  status === 'SUBMITTING' || hasErrors || isFormEmpty
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl shadow-indigo-600/20'
                }`}
              >
                {status === 'SUBMITTING' ? (
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                ) : t.contact.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;