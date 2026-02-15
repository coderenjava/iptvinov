import { GoogleGenAI } from "https://esm.sh/@google/genai@1.34.0";

const translations = {
  en: {
    nav: { home: 'Home', features: 'Features', pricing: 'Pricing', contact: 'Contact' },
    hero: {
      title: 'Premium IPTV Entertainment for Everyone',
      subtitle: 'Experience over 20,000 live channels and 80,000 VOD in 4K/UHD. Stable, fast, and secure streaming on all your devices.',
      cta: 'Choose a Plan',
      secondaryCta: 'Contact Support',
    },
    features: {
      title: 'Why Choose IPTVinov?',
      items: [
        { title: '4K/UHD Quality', desc: 'Crystal clear resolution for all major sports and movie channels.' },
        { title: 'Global Channels', desc: 'Access channels from the USA, UK, France, Arab World, and 50+ other countries.' },
        { title: 'Multi-Device', desc: 'Compatible with Smart TVs, Android, iOS, Mag, and Firestick.' },
        { title: '99.9% Uptime', desc: 'Anti-freeze technology for a smooth, lag-free viewing experience.' },
      ],
    },
    testimonials: {
      title: 'What Our Customers Say',
      subtitle: 'Real screenshots from our happy community worldwide.',
      status: 'online',
    },
    pricing: {
      title: 'Our Subscriptions',
      subtitle: 'Choose the best plan that fits your needs.',
      buyNow: 'Subscribe via WhatsApp',
      unavailable: 'Unavailable',
      plans: {
        monthly: { name: 'Monthly', price: '10€', period: '/m', features: ['20,000+ Channels', '80,000+ VOD', '4K / UHD Support', '24/7 Support', '1 Device'], disabled: true },
        sixMonths: { name: '6 Months', price: '30€', period: '/6m', features: ['Everything in Monthly', 'Multiple Server Links', 'Catch-up Service', 'Anti-Freeze Tech'], badge: 'Popular' },
        annually: { name: 'Annually', price: '50€', period: '/y', features: ['Full 1 Year Access', 'Premium Tech Support', 'All Device Formats', 'VPN Friendly', 'Best Value Plan'], badge: 'Best Value' }
      }
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Have questions before you buy? Our team is available 24/7 to help you.',
      name: 'Full Name', email: 'Email Address', message: 'How can we help you?',
      send: 'Send Message', success: 'Thank you! We will get back to you shortly.',
      errorEmail: 'Please enter a valid email address.', errorMessage: 'Message must be at least 10 characters long.',
      errorName: 'Name is required.', emailUs: 'Email Us', whatsapp: 'WhatsApp'
    },
    footer: { rights: '© 2025 IPTVinov. All rights reserved.', social: 'Follow us', privacy: 'Privacy Policy' },
    assistant: { title: 'AI Support', placeholder: 'Ask about channels, setup, or plans...', welcome: 'Hello! I am the IPTVinov Assistant. How can I help you today?', }
  },
  fr: {
    nav: { home: 'Accueil', features: 'Caractéristiques', pricing: 'Tarifs', contact: 'Contact' },
    hero: { title: 'Divertissement IPTV Premium pour tous', subtitle: 'Accédez à plus de 20 000 chaînes en direct et 80 000 VOD en 4K/UHD. Streaming stable, rapide et sécurisé sur tous vos appareils.', cta: 'Choisir un forfait', secondaryCta: 'Support technique', },
    features: { title: 'Pourquoi choisir IPTVinov ?', items: [ { title: 'Qualité 4K/UHD', desc: 'Résolution cristalline pour tous les grands événements sportifs et films.' }, { title: 'Chaînes Mondiales', desc: 'Accès aux chaînes de France, Belgique, USA, Monde Arabe et 50+ pays.' }, { title: 'Multi-appareils', desc: 'Compatible avec Smart TV, Android, iOS, Mag et Firestick.' }, { title: 'Disponibilité 99.9%', desc: 'Technologie anti-freeze pour une expérience fluide sans coupures.' }, ], },
    testimonials: { title: 'Ce que disent nos clients', subtitle: 'Captures d\'écran réelles de notre communauté satisfaite.', status: 'en ligne', },
    pricing: { 
        title: 'Nos Abonnements', 
        subtitle: 'Choisissez le forfait qui vous convient le mieux.', 
        buyNow: 'S\'abonner via WhatsApp',
        unavailable: 'Indisponible',
        plans: { 
            monthly: { name: 'Mensuel', price: '10€', period: '/mois', features: ['20 000+ Chaînes', '80 000+ VOD', 'Support 4K / UHD', 'Support 24/7', '1 Appareil'], disabled: true }, 
            sixMonths: { name: '6 Mois', price: '30€', period: '/6m', features: ['Tout du forfait Mensuel', 'Multiples liens serveurs', 'Service Replay', 'Technologie Anti-Freeze'], badge: 'Populaire' }, 
            annually: { name: 'Annuel', price: '50€', period: '/an', features: ['Accès complet 1 an', 'Support technique Premium', 'Tous formats d\'appareils', 'Compatible VPN', 'Meilleure offre'], badge: 'Meilleur Prix' } 
        } 
    },
    contact: { title: 'Contactez-nous', subtitle: 'Des questions avant d\'acheter ? Notre équipe est disponible 24/7 pour vous aider.', name: 'Nom Complet', email: 'Adresse Email', message: 'Comment pouvons-nous vous aider ?', send: 'Envoyer le message', success: 'Merci ! Nous vous répondrons dans les plus brefs délais.', errorEmail: 'Veuillez entrer une adresse email valide.', errorMessage: 'Le message doit contenir au moins 10 caractères.', errorName: 'Le nom est requis.', emailUs: 'Email', whatsapp: 'WhatsApp' },
    footer: { rights: '© 2025 IPTVinov. Tous droits réservés.', social: 'Suivez-nous', privacy: 'Politique de confidentialité', },
    assistant: { title: 'Support IA', placeholder: 'Posez des questions sur les chaînes...', welcome: 'Bonjour ! Je suis l\'assistant IPTVinov. Comment puis-je vous aider ?', }
  },
  es: {
    nav: { home: 'Inicio', features: 'Caractéristiques', pricing: 'Precios', contact: 'Contacto' },
    hero: { title: 'Entretenimiento IPTV Premium para Todos', subtitle: 'Acceda a más de 20.000 canales en vivo y 80.000 VOD en 4K/UHD. Transmisión estable, rápida y segura en todos sus dispositivos.', cta: 'Elegir un Plan', secondaryCta: 'Contactar Soporte', },
    features: { title: '¿Por qué elegir IPTVinov?', items: [ { title: 'Calidad 4K/UHD', desc: 'Resolución cristalina para todos los principales canales de deportes y películas.' }, { title: 'Canales Globales', desc: 'Acceso a canales de España, EE. UU., Reino Unido, Mundo Árabe y más de 50 países.' }, { title: 'Multi-dispositivo', desc: 'Compatible con Smart TVs, Android, iOS, Mag y Firestick.' }, { title: '99.9% de Disponibilidad', desc: 'Tecnología anti-congelación para una experiencia de visualización fluida.' }, ], },
    testimonials: { title: 'Lo que dicen nuestros clientes', subtitle: 'Capturas de pantalla reales de nuestra comunidad feliz.', status: 'en línea', },
    pricing: { 
        title: 'Nuestras Suscripciones', 
        subtitle: 'Elija el mejor plan que se adapte a sus necesidades.', 
        buyNow: 'Suscribirse vía WhatsApp',
        unavailable: 'No disponible',
        plans: { 
            monthly: { name: 'Mensual', price: '10€', period: '/mes', features: ['20,000+ Canales', '80,000+ VOD', 'Soporte 4K / UHD', 'Soporte 24/7', '1 Dispositivo'], disabled: true }, 
            sixMonths: { name: '6 Meses', price: '30€', period: '/6m', features: ['Todo lo del plan Mensual', 'Múltiples enlaces de servidor', 'Servicio de Catch-up', 'Tecnología Anti-Freeze'], badge: 'Popular' }, 
            annually: { name: 'Anual', price: '50€', period: '/año', features: ['Acceso total de 1 año', 'Soporte técnico Premium', 'Todos los formatos', 'Compatible con VPN', 'Mejor valor'], badge: 'Mejor Opción' } 
        } 
    },
    contact: { title: 'Ponte en Contacto', subtitle: '¿Tienes preguntas antes de comprar? Nuestro equipo está disponible 24/7.', name: 'Nombre Completo', email: 'Correo Electrónico', message: '¿Cómo podemos ayudarte?', send: 'Enviar Mensaje', success: '¡Gracias! Nos pondremos en contacto contigo en breve.', errorEmail: 'Por favor, introduce una dirección de correo válida.', errorMessage: 'El mensaje debe tener al menos 10 caracteres.', errorName: 'El nombre es obligatorio.', emailUs: 'Correo', whatsapp: 'WhatsApp' },
    footer: { rights: '© 2025 IPTVinov. Todos los derechos reservados.', social: 'Síguenos', privacy: 'Política de Privacidad', },
    assistant: { title: 'Soporte IA', placeholder: 'Pregunta sobre canales...', welcome: '¡Hola! Soy el Asistente de IPTVinov. ¿Cómo puedo ayudarte hoy?', }
  },
  ar: {
    nav: { home: 'الرئيسية', features: 'المميزات', pricing: 'الأسعار', contact: 'اتصل بنا' },
    hero: { title: 'ترفيه IPTV متميز للجميع', subtitle: 'استمتع بأكثر من 20,000 قناة مباشرة و80,000 فيلم ومسلسل بدقة 4K/UHD. بث مستقر وسريع وآمن على جميع أجهزتك.', cta: 'اختر باقة', secondaryCta: 'الدعم الفني', },
    features: { title: 'لماذا تختار IPTVinov؟', items: [ { title: 'جودة 4K/UHD', desc: 'دقة فائقة الوضوح لجميع القنوات الرياضية والسينمائية الكبرى.' }, { title: 'قنوات عالمية', desc: 'الوصول إلى قنوات من الدول العربية، فرنسا، أمريكا، وأكثر من 50 دولة أخرى.' }, { title: 'متعدد الأجهزة', desc: 'متوافق مع الشاشات الذكية، أندرويد، آيفون، Mag و Firestick.' }, { title: 'ثبات بنسبة \u200E99.9%', desc: 'تقنية مانع التقطيع لتجربة مشاهدة سلسة بدون توقف.' }, ], },
    testimonials: { title: 'ماذا يقول عملاؤنا', subtitle: 'لقطات شاشة حقيقية من مجتمعنا السعيد حول العالم.', status: 'متصل الآن', },
    pricing: { 
        title: 'اشتراكاتنا', 
        subtitle: 'اختر الباقة الأنسب لاحتياجاتك.', 
        buyNow: 'اشترك عبر واتساب',
        unavailable: 'غير متاح',
        plans: { 
            monthly: { name: 'شهري', price: '\u200E10€', period: '/شهريا', features: ['أكثر من 20,000 قناة', 'أكثر من 80,000 فيلم', 'دعم 4K / UHD', 'دعم فني \u200E24/7', 'جهاز واحد'], disabled: true }, 
            sixMonths: { name: '6 أشهر', price: '\u200E30€', period: '/6 أشهر', features: ['كل مميزات الاشتراك الشهري', 'روابط سيرفر متعددة', 'خدمة المراجعة', 'تقنية مانع التقطيع'], badge: 'الأكثر طلباً' }, 
            annually: { name: 'سنوي', price: '\u200E50€', period: '/سنوياً', features: ['وصول كامل لمدة سنة', 'دعم تقني متميز', 'جميع صيغ الأجهزة', 'يدعم VPN', 'أفضل قيمة مقابل السعر'], badge: 'أفضل عرض' } 
        } 
    },
    contact: { title: 'تواصل معنا', subtitle: 'لديك أسئلة قبل الشراء؟ فريقنا متوفر 24/7 لمساعدتك.', name: 'الاسم الكامل', email: 'البريد الإلكتروني', message: 'كيف يمكننا مساعدتك؟', send: 'إرسال الرسالة', success: 'شكراً لك! سنتواصل معك في أقرب وقت ممكن.', errorEmail: 'يرجى إدخال بريد إلكتروني صحيح.', errorMessage: 'يجب أن تكون الرسالة 10 أحرف على الأقل.', errorName: 'الاسم مطلوب.', emailUs: 'بريدنا', whatsapp: 'واتساب' },
    footer: { rights: '© 2025 IPTVinov. جميع الحقوق محفوظة.', social: 'تابعنا', privacy: 'سياسة الخصوصية', },
    assistant: { title: 'الدعم الذكي', placeholder: 'اسأل عن القنوات، التثبيت...', welcome: 'مرحباً! أنا مساعد IPTVinov. كيف يمكنني مساعدتك اليوم؟', }
  }
};

document.addEventListener('DOMContentLoaded', () => {
    let currentLang = 'en';

    const setLanguage = (lang) => {
        currentLang = lang;
        const t = translations[lang];

        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            const translation = key.split('.').reduce((obj, k) => obj && obj[k], t);
            if (translation) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if(el.placeholder !== undefined) el.placeholder = translation;
                } else {
                    el.innerHTML = translation;
                }
            }
        });
        
        updateDynamicContent(lang);

        document.querySelectorAll('.lang-btn').forEach(btn => {
            const isDesktop = !btn.parentElement.classList.contains('flex-wrap');
            const isActive = btn.dataset.lang === lang;
            if (isDesktop) {
                 btn.className = `lang-btn px-2 py-1 rounded text-xs uppercase font-bold transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`;
            } else {
                 btn.className = `lang-btn flex-1 min-w-[60px] py-2 rounded text-center uppercase font-bold transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`;
            }
        });
        
        const fabContainer = document.getElementById('fab-container');
        fabContainer.classList.toggle('right-6', lang !== 'ar');
        fabContainer.classList.toggle('left-6', lang === 'ar');
        fabContainer.classList.remove('right-6', 'left-6');
        fabContainer.classList.add(lang === 'ar' ? 'left-6' : 'right-6');

        const assistantWindow = document.getElementById('assistant-window');
        assistantWindow.classList.toggle('right-4', lang !== 'ar');
        assistantWindow.classList.toggle('sm:right-0', lang !== 'ar');
        assistantWindow.classList.toggle('left-4', lang === 'ar');
        assistantWindow.classList.toggle('sm:left-0', lang === 'ar');
        assistantWindow.classList.remove('right-4', 'sm:right-0', 'left-4', 'sm:left-0');
        assistantWindow.classList.add(lang === 'ar' ? 'left-4' : 'right-4', lang === 'ar' ? 'sm:left-0' : 'sm:right-0');

        const sendBtnIcon = document.querySelector('#assistant-send-btn svg');
        sendBtnIcon.classList.toggle('rotate-90', lang !== 'ar');
        sendBtnIcon.classList.toggle('-rotate-90', lang === 'ar');
        sendBtnIcon.classList.remove('rotate-90', '-rotate-90');
        sendBtnIcon.classList.add(lang === 'ar' ? '-rotate-90' : 'rotate-90');

    };

    const updateDynamicContent = (lang) => {
        const t = translations[lang];

        const featuresGrid = document.getElementById('features-grid');
        const icons = [
            `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`,
            `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h.5A2.5 2.5 0 0118 14.5v.357M7 21a9 9 0 1118-9 9 9 0 01-18 9z"></path></svg>`,
            `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>`,
            `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`
        ];
        featuresGrid.innerHTML = t.features.items.map((feature, idx) => `
            <div class="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all hover:-translate-y-2 group">
              <div class="w-16 h-16 rounded-xl bg-indigo-600/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">${icons[idx]}</div>
              <h3 class="text-xl font-bold mb-4">${feature.title}</h3>
              <p class="text-slate-400 leading-relaxed">${feature.desc}</p>
            </div>
        `).join('');

        const pricingGrid = document.getElementById('pricing-grid');
        pricingGrid.innerHTML = Object.values(t.pricing.plans).map(plan => {
            const isPopular = plan.badge && !plan.disabled;
            const isDisabled = plan.disabled;
            
            const cardClasses = `relative p-8 rounded-3xl border transition-all duration-300 flex flex-col ${
                isPopular
                    ? 'bg-indigo-600/10 border-indigo-500 shadow-2xl shadow-indigo-500/10 scale-105 z-10'
                    : 'bg-white/5 border-white/10'
            } ${isDisabled ? 'opacity-60' : 'hover:border-white/20'}`;

            const badgeHtml = isDisabled
                ? `<div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-slate-700 text-white text-[10px] font-bold rounded-full uppercase tracking-widest whitespace-nowrap">${t.pricing.unavailable}</div>`
                : isPopular
                    ? `<div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-[10px] font-bold rounded-full uppercase tracking-widest whitespace-nowrap">${plan.badge}</div>`
                    : '';
            
            const buttonClasses = `pricing-btn w-full py-4 rounded-xl font-bold transition-all ${
                isDisabled
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : isPopular
                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20'
                        : 'bg-white text-slate-900 hover:bg-slate-100'
            }`;
            
            const buttonText = isDisabled ? t.pricing.unavailable : t.pricing.buyNow;
            
            return `
                <div class="${cardClasses}">
                  ${badgeHtml}
                  <h3 class="text-2xl font-bold mb-4">${plan.name}</h3>
                  <div class="flex items-baseline gap-1 mb-8">
                    <span class="text-5xl font-bold" dir="ltr">${plan.price}</span>
                    <span class="text-slate-400">${plan.period}</span>
                  </div>
                  <ul class="space-y-4 mb-10 flex-1">
                    ${plan.features.map(f => `<li class="flex items-center gap-3 text-slate-300 text-sm"><svg class="w-5 h-5 flex-shrink-0 ${isPopular ? 'text-indigo-400' : 'text-green-400'}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>${f}</li>`).join('')}
                  </ul>
                  <button data-plan-name="${plan.name}" class="${buttonClasses}" ${isDisabled ? 'disabled' : ''}>${buttonText}</button>
                </div>
            `;
        }).join('');
        
        const testimonialsContainer = document.getElementById('testimonials-container');
        const feedbacks = [ { text: "Super service, fast activation! Highly recommend.", author: "Marco S.", time: "10:24 AM" }, { text: "Best 4K quality I've seen. No buffering during the match.", author: "Sarah L.", time: "11:45 AM" }, { text: "Support answered within 5 minutes on WhatsApp. Very professional.", author: "Ahmed K.", time: "02:10 PM" }, { text: "Working perfectly on my Firestick. Thank you for the guide!", author: "Julien R.", time: "09:30 PM" }, ];
        testimonialsContainer.innerHTML = [...feedbacks, ...feedbacks].map(item => `
            <div class="inline-block w-72 sm:w-80 group cursor-default">
              <div class="bg-[#0b141a] rounded-2xl border border-white/5 shadow-2xl overflow-hidden transform transition-transform hover:scale-105">
                <div class="bg-[#202c33] p-3 flex items-center gap-3 border-b border-white/5">
                  <div class="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-xs font-bold text-white">${item.author[0]}</div>
                  <div><p class="text-white text-xs font-semibold leading-none">${item.author}</p><p class="text-[10px] text-green-400 mt-1" data-key="testimonials.status">${t.testimonials.status}</p></div>
                </div>
                <div class="p-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
                  <div class="bg-[#005c4b] p-3 rounded-lg shadow-md max-w-[90%] relative ${lang === 'ar' ? 'mr-auto rounded-tr-none' : 'ml-auto rounded-tl-none'}">
                    <p class="text-white text-sm whitespace-normal leading-relaxed">${item.text}</p>
                    <div class="flex justify-end items-center gap-1 mt-1"><span class="text-[10px] text-white/60">${item.time}</span><svg class="w-3 h-3 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M23.334 3.183c-.469-.434-1.218-.41-1.652.059l-11.85 12.821-4.707-4.43c-.469-.441-1.219-.441-1.688 0l-.134.126c-.469.441-.469 1.156 0 1.598l6.195 5.833.134.127a1.18 1.18 0 00.844.351c.319 0 .611-.129.822-.331l12.169-14.996.126-.155c.346-.46.319-1.127-.259-1.579l-.101-.081z"></path><path d="M12.166 16.004L10.832 17.338l6.195 5.833.134.127a1.18 1.18 0 00.844.351c.319 0 .611-.129.822-.331l12.169-14.996.126-.155c.346-.46.319-1.127-.259-1.579l-.101-.081c-.469-.434-1.218-.41-1.652.059l-11.85 12.821z" transform="translate(-5, -2)"></path></svg></div>
                  </div>
                </div>
              </div>
            </div>`).join('');
            
        document.querySelectorAll('.pricing-btn').forEach(btn => btn.addEventListener('click', (e) => handleSubscribe(e.currentTarget.dataset.planName)));
        document.getElementById('assistant-input').placeholder = t.assistant.placeholder;
        if(document.getElementById('assistant-messages').innerHTML.trim() === '') {
            document.getElementById('assistant-messages').innerHTML = `<div class="text-center text-slate-500 py-10"><p class="text-sm px-4">${t.assistant.welcome}</p></div>`;
        }
    };
    
    const handleSubscribe = (planName) => {
        const text = `Hello IPTVinov, I'm interested in the ${planName} plan.`;
        window.open(`https://wa.me/212724573895?text=${encodeURIComponent(text)}`, '_blank');
    };

    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    mobileMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
            mobileMenu.classList.add('hidden');
        }
    });

    // Language Buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Contact Form
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const t = translations[currentLang];
        
        let isValid = true;
        if (!data.name.trim()) {
            form.querySelector('input[name="name"]').nextElementSibling.textContent = t.contact.errorName;
            isValid = false;
        }
        if (!data.email.trim() || !/^\S+@\S+\.\S+$/.test(data.email)) {
             form.querySelector('input[name="email"]').nextElementSibling.textContent = t.contact.errorEmail;
            isValid = false;
        }
        if (!data.message.trim() || data.message.length < 10) {
            form.querySelector('textarea[name="message"]').nextElementSibling.textContent = t.contact.errorMessage;
            isValid = false;
        }
        
        if (!isValid) return;

        form.querySelector('button[type="submit"]').disabled = true;
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
            });
            if(response.ok) {
                document.getElementById('form-status-success').style.display = 'flex';
                form.reset();
                setTimeout(() => document.getElementById('form-status-success').style.display = 'none', 5000);
            } else {
                alert('An error occurred. Please try again.');
            }
        } catch(error) {
            alert('An error occurred. Please try again.');
        } finally {
            form.querySelector('button[type="submit"]').disabled = false;
        }
    });
    form.querySelectorAll('.form-input').forEach(input => {
       input.addEventListener('input', () => {
           input.nextElementSibling.textContent = '';
       })
    });

    // Privacy Policy
    const mainContent = document.getElementById('main-content');
    const privacySection = document.getElementById('privacy-policy');
    document.getElementById('show-privacy').addEventListener('click', () => {
        mainContent.style.display = 'none';
        privacySection.style.display = 'block';
        window.scrollTo(0,0);
    });
    document.getElementById('back-to-home').addEventListener('click', () => {
        mainContent.style.display = 'block';
        privacySection.style.display = 'none';
        window.scrollTo(0,0);
    });

    // AI Assistant
    const assistantWindow = document.getElementById('assistant-window');
    const openAssistantBtn = document.getElementById('open-assistant-btn');
    const closeAssistantBtn = document.getElementById('close-assistant-btn');
    const assistantMessages = document.getElementById('assistant-messages');
    const assistantInput = document.getElementById('assistant-input');
    const assistantSendBtn = document.getElementById('assistant-send-btn');
    let messages = [];

    openAssistantBtn.addEventListener('click', () => assistantWindow.classList.remove('hidden'));
    closeAssistantBtn.addEventListener('click', () => assistantWindow.classList.add('hidden'));

    const addMessage = (text, sender) => {
        if (assistantMessages.querySelector('.text-center')) {
            assistantMessages.innerHTML = '';
        }
        const messageEl = document.createElement('div');
        messageEl.className = `flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`;
        messageEl.innerHTML = `<div class="max-w-[85%] p-3 rounded-2xl text-sm ${sender === 'user' ? 'bg-indigo-600 text-white rounded-tr-none shadow-md' : 'bg-slate-800 text-slate-200 rounded-tl-none border border-white/5'}">${text}</div>`;
        assistantMessages.appendChild(messageEl);
        assistantMessages.scrollTop = assistantMessages.scrollHeight;
    };
    
    const addLoadingIndicator = () => {
      const loadingEl = document.createElement('div');
      loadingEl.id = 'loading-indicator';
      loadingEl.className = 'flex justify-start';
      loadingEl.innerHTML = `<div class="bg-slate-800 p-3 rounded-2xl rounded-tl-none flex gap-1 border border-white/5"><div class="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></div><div class="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div><div class="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div></div>`;
      assistantMessages.appendChild(loadingEl);
      assistantMessages.scrollTop = assistantMessages.scrollHeight;
    }

    const handleAssistantSend = async () => {
        const userInput = assistantInput.value.trim();
        if (!userInput) return;

        addMessage(userInput, 'user');
        assistantInput.value = '';
        assistantSendBtn.disabled = true;
        addLoadingIndicator();

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-3-flash-preview',
                contents: userInput,
                config: {
                  systemInstruction: `You are a helpful pre-sales and support assistant for IPTVinov, an IPTV subscription service. Always reply in the same language as the user's message. The current website language is ${currentLang}. Be polite, professional, and focus on converting the user to a customer.
                  Pricing: 1 Month: 10€, 6 Months: 45€, 1 Year: 70€.
                  Features: 20k+ channels, 80k+ VOD, 4K/UHD, works on most devices.
                  Contact: WhatsApp (+212724573895), Email (support@iptvinov.com).`,
                },
            });
            const aiText = response.text || "I'm sorry, I couldn't process that.";
            document.getElementById('loading-indicator')?.remove();
            addMessage(aiText, 'ai');
        } catch (error) {
            document.getElementById('loading-indicator')?.remove();
            addMessage("Service temporarily unavailable. Please use WhatsApp.", 'ai');
        } finally {
            assistantSendBtn.disabled = false;
        }
    };

    assistantSendBtn.addEventListener('click', handleAssistantSend);
    assistantInput.addEventListener('keypress', (e) => e.key === 'Enter' && handleAssistantSend());


    // Initial Load
    setLanguage('en');
});