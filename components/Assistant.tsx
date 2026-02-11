
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { TranslationStrings, Language } from '../types';

interface Props {
  t: TranslationStrings;
  lang: Language;
}

const Assistant: React.FC<Props> = ({ t, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'ai' }[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setInput('');
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const languageMap: Record<Language, string> = {
        en: 'English',
        fr: 'French',
        ar: 'Arabic',
        es: 'Spanish'
      };

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are a helpful pre-sales and support assistant for IPTVinov.
          IPTVinov sells high-end IPTV subscriptions:
          - 1 Month: 10€
          - 6 Months: 45€ (Popular)
          - 1 Year: 70€ (Best Value)
          
          Technical details:
          - Over 20k channels and 80k VOD.
          - 4K/UHD quality, anti-freeze tech.
          - Works on Smart TVs (Samsung, LG), Android TV, Firestick, iOS, Smartphones, Mag boxes.
          
          Contact:
          - WhatsApp: 00212724573895
          - Email: support@iptvinov.com
          
          Important: Always reply in the same language as the user's message.
          The current UI language is ${languageMap[lang]}. 
          Be polite, expert, and professional. Focus on converting the user to a customer.`,
        },
      });

      const aiText = response.text || "I'm sorry, I couldn't process that.";
      setMessages(prev => [...prev, { text: aiText, sender: 'ai' }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "Service temporarily unavailable. Please use WhatsApp: +212724573895.", sender: 'ai' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {isOpen && (
        <div className={`fixed sm:absolute bottom-24 sm:bottom-20 ${lang === 'ar' ? 'left-4 sm:left-0' : 'right-4 sm:right-0'} w-[calc(100vw-32px)] sm:w-[400px] h-[500px] bg-slate-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in z-[60]`}>
          <div className="p-4 bg-indigo-600 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
              </div>
              <span className="font-bold">{t.assistant.title}</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/50">
            {messages.length === 0 && (
              <div className="text-center text-slate-500 py-10">
                <p className="text-sm px-4">{t.assistant.welcome}</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.sender === 'user' ? 'bg-indigo-600 text-white rounded-tr-none shadow-md' : 'bg-slate-800 text-slate-200 rounded-tl-none border border-white/5'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none flex gap-1 border border-white/5">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-slate-900">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.assistant.placeholder}
                className="flex-1 px-4 py-2 bg-slate-800 border border-white/10 rounded-xl text-sm focus:border-indigo-500 outline-none text-white"
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="p-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-white transition-colors disabled:opacity-50 shadow-lg shadow-indigo-600/20 flex items-center justify-center"
              >
                <svg className={`w-5 h-5 ${lang === 'ar' ? '-rotate-90' : 'rotate-90'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-indigo-600 hover:bg-indigo-500 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center group"
        title="AI Assistant"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
      </button>
    </div>
  );
};

export default Assistant;
