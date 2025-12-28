

import { TranslationStrings } from './types';

export const translations: Record<string, TranslationStrings> = {
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
      plans: {
        monthly: {
          name: 'Monthly', price: '10€', period: '/m',
          features: ['20,000+ Channels', '80,000+ VOD', '4K / UHD Support', '24/7 Support', '1 Device']
        },
        sixMonths: {
          name: '6 Months', price: '45€', period: '/6m',
          features: ['Everything in Monthly', 'Multiple Server Links', 'EPG Guide Included', 'Catch-up Service', 'Anti-Freeze Tech'],
          badge: 'Popular'
        },
        annually: {
          name: 'Annually', price: '70€', period: '/y',
          features: ['Full 1 Year Access', 'Premium Tech Support', 'All Device Formats', 'VPN Friendly', 'Best Value Plan'],
          badge: 'Best Value'
        }
      }
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Have questions before you buy? Our team is available 24/7 to help you.',
      name: 'Full Name',
      email: 'Email Address',
      message: 'How can we help you?',
      send: 'Send Message',
      success: 'Thank you! We will get back to you shortly.',
      errorEmail: 'Please enter a valid email address.',
      errorMessage: 'Message must be at least 10 characters long.',
      errorName: 'Name is required.',
      emailUs: 'Email Us',
      whatsapp: 'WhatsApp'
    },
    footer: {
      rights: '© 2025 IPTVinov. All rights reserved.',
      social: 'Follow us',
      privacy: 'Privacy Policy',
    },
    assistant: {
      title: 'AI Support',
      placeholder: 'Ask about channels, setup, or plans...',
      welcome: 'Hello! I am the IPTVinov Assistant. How can I help you today?',
    },
    // FIX: Added reseller translations.
    reseller: {
      title: 'Become a Reseller',
      subtitle: 'Start your own IPTV business with our powerful reseller panel.',
      cta: 'Become a Reseller',
      plans: {
        standard: {
          name: 'Standard Panel',
          price: '150€',
          period: '',
          features: ['50 Credits Included', 'Full Admin Panel', '24/7 Reseller Support', 'Create Custom Plans', 'Manage Users'],
          badge: 'Get Started'
        },
        super: {
          name: 'Super Panel',
          price: '300€',
          period: '',
          features: ['120 Credits Included', 'Advanced Management Tools', 'Priority Support', 'API Access', 'White-label Options'],
          badge: 'Pro Choice'
        }
      }
    }
  },
  fr: {
    nav: { home: 'Accueil', features: 'Caractéristiques', pricing: 'Tarifs', contact: 'Contact' },
    hero: {
      title: 'Divertissement IPTV Premium pour tous',
      subtitle: 'Accédez à plus de 20 000 chaînes en direct et 80 000 VOD en 4K/UHD. Streaming stable, rapide et sécurisé sur tous vos appareils.',
      cta: 'Choisir un forfait',
      secondaryCta: 'Support technique',
    },
    features: {
      title: 'Pourquoi choisir IPTVinov ?',
      items: [
        { title: 'Qualité 4K/UHD', desc: 'Résolution cristalline pour tous les grands événements sportifs et films.' },
        { title: 'Chaînes Mondiales', desc: 'Accès aux chaînes de France, Belgique, USA, Monde Arabe et 50+ pays.' },
        { title: 'Multi-appareils', desc: 'Compatible avec Smart TV, Android, iOS, Mag et Firestick.' },
        { title: 'Disponibilité 99.9%', desc: 'Technologie anti-freeze pour une expérience fluide sans coupures.' },
      ],
    },
    testimonials: {
      title: 'Ce que disent nos clients',
      subtitle: 'Captures d\'écran réelles de notre communauté satisfaite.',
      status: 'en ligne',
    },
    pricing: {
      title: 'Nos Abonnements',
      subtitle: 'Choisissez le forfait qui vous convient le mieux.',
      buyNow: 'S\'abonner via WhatsApp',
      plans: {
        monthly: {
          name: 'Mensuel', price: '10€', period: '/mois',
          features: ['20 000+ Chaînes', '80 000+ VOD', 'Support 4K / UHD', 'Support 24/7', '1 Appareil']
        },
        sixMonths: {
          name: '6 Mois', price: '45€', period: '/6m',
          features: ['Tout du forfait Mensuel', 'Multiples liens serveurs', 'Guide EPG inclus', 'Service Replay', 'Technologie Anti-Freeze'],
          badge: 'Populaire'
        },
        annually: {
          name: 'Annuel', price: '70€', period: '/an',
          features: ['Accès complet 1 an', 'Support technique Premium', 'Tous formats d\'appareils', 'Compatible VPN', 'Meilleure offre'],
          badge: 'Meilleur Prix'
        }
      }
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Des questions avant d\'acheter ? Notre équipe est disponible 24/7 pour vous aider.',
      name: 'Nom Complet',
      email: 'Adresse Email',
      message: 'Comment pouvons-nous vous aider ?',
      send: 'Envoyer le message',
      success: 'Merci ! Nous vous répondrons dans les plus brefs délais.',
      errorEmail: 'Veuillez entrer une adresse email valide.',
      errorMessage: 'Le message doit contenir au moins 10 caractères.',
      errorName: 'Le nom est requis.',
      emailUs: 'Email',
      whatsapp: 'WhatsApp'
    },
    footer: {
      rights: '© 2025 IPTVinov. Tous droits réservés.',
      social: 'Suivez-nous',
      privacy: 'Politique de confidentialité',
    },
    assistant: {
      title: 'Support IA',
      placeholder: 'Posez des questions sur les chaînes...',
      welcome: 'Bonjour ! Je suis l\'assistant IPTVinov. Comment puis-je vous aider ?',
    },
    // FIX: Added reseller translations.
    reseller: {
      title: 'Devenez Revendeur',
      subtitle: 'Lancez votre propre business IPTV avec notre puissant panel revendeur.',
      cta: 'Devenir Revendeur',
      plans: {
        standard: {
          name: 'Panel Standard',
          price: '150€',
          period: '',
          features: ['50 Crédits Inclus', 'Panel Admin Complet', 'Support Revendeur 24/7', 'Créer des forfaits', 'Gérer les utilisateurs'],
          badge: 'Pour Démarrer'
        },
        super: {
          name: 'Super Panel',
          price: '300€',
          period: '',
          features: ['120 Crédits Inclus', 'Outils de gestion avancés', 'Support Prioritaire', 'Accès API', 'Options Marque Blanche'],
          badge: 'Choix Pro'
        }
      }
    }
  },
  es: {
    nav: { home: 'Inicio', features: 'Características', pricing: 'Precios', contact: 'Contacto' },
    hero: {
      title: 'Entretenimiento IPTV Premium para Todos',
      subtitle: 'Acceda a más de 20.000 canales en vivo y 80.000 VOD en 4K/UHD. Transmisión estable, rápida y segura en todos sus dispositivos.',
      cta: 'Elegir un Plan',
      secondaryCta: 'Contactar Soporte',
    },
    features: {
      title: '¿Por qué elegir IPTVinov?',
      items: [
        { title: 'Calidad 4K/UHD', desc: 'Resolución cristalina para todos los principales canales de deportes y películas.' },
        { title: 'Canales Globales', desc: 'Acceso a canales de España, EE. UU., Reino Unido, Mundo Árabe y más de 50 países.' },
        { title: 'Multi-dispositivo', desc: 'Compatible con Smart TVs, Android, iOS, Mag y Firestick.' },
        { title: '99.9% de Disponibilidad', desc: 'Tecnología anti-congelación para una experiencia de visualización fluida.' },
      ],
    },
    testimonials: {
      title: 'Lo que dicen nuestros clientes',
      subtitle: 'Capturas de pantalla reales de nuestra comunidad feliz.',
      status: 'en línea',
    },
    pricing: {
      title: 'Nuestras Suscripciones',
      subtitle: 'Elija el mejor plan que se adapte a sus necesidades.',
      buyNow: 'Suscribirse vía WhatsApp',
      plans: {
        monthly: {
          name: 'Mensual', price: '10€', period: '/mes',
          features: ['20,000+ Canales', '80,000+ VOD', 'Soporte 4K / UHD', 'Soporte 24/7', '1 Dispositivo']
        },
        sixMonths: {
          name: '6 Meses', price: '45€', period: '/6m',
          features: ['Todo lo del plan Mensual', 'Múltiples enlaces de servidor', 'Guía EPG incluida', 'Servicio de Catch-up', 'Tecnología Anti-Freeze'],
          badge: 'Popular'
        },
        annually: {
          name: 'Anual', price: '70€', period: '/año',
          features: ['Acceso total de 1 año', 'Soporte técnico Premium', 'Todos los formatos', 'Compatible con VPN', 'Mejor valor'],
          badge: 'Mejor Opción'
        }
      }
    },
    contact: {
      title: 'Ponte en Contacto',
      subtitle: '¿Tienes preguntas antes de comprar? Nuestro equipo está disponible 24/7.',
      name: 'Nombre Completo',
      email: 'Correo Electrónico',
      message: '¿Cómo podemos ayudarte?',
      send: 'Enviar Mensaje',
      success: '¡Gracias! Nos pondremos en contacto contigo en breve.',
      errorEmail: 'Por favor, introduce una dirección de correo válida.',
      errorMessage: 'El mensaje debe tener al menos 10 caracteres.',
      errorName: 'El nombre es obligatorio.',
      emailUs: 'Correo',
      whatsapp: 'WhatsApp'
    },
    footer: {
      rights: '© 2025 IPTVinov. Todos los derechos reservados.',
      social: 'Síguenos',
      privacy: 'Política de Privacidad',
    },
    assistant: {
      title: 'Soporte IA',
      placeholder: 'Pregunta sobre canales...',
      welcome: '¡Hola! Soy el Asistente de IPTVinov. ¿Cómo puedo ayudarte hoy?',
    },
    // FIX: Added reseller translations.
    reseller: {
      title: 'Conviértete en Revendedor',
      subtitle: 'Inicia tu propio negocio de IPTV con nuestro potente panel de revendedor.',
      cta: 'Convertirse en Revendedor',
      plans: {
        standard: {
          name: 'Panel Estándar',
          price: '150€',
          period: '',
          features: ['50 Créditos Incluidos', 'Panel de Admin Completo', 'Soporte 24/7 para Revendedores', 'Crear Planes Personalizados', 'Gestionar Usuarios'],
          badge: 'Para Empezar'
        },
        super: {
          name: 'Super Panel',
          price: '300€',
          period: '',
          features: ['120 Créditos Incluidos', 'Herramientas de gestión avanzadas', 'Soporte Prioritario', 'Acceso a API', 'Opciones de Marca Blanca'],
          badge: 'Opción Pro'
        }
      }
    }
  },
  ar: {
    nav: { home: 'الرئيسية', features: 'المميزات', pricing: 'الأسعار', contact: 'اتصل بنا' },
    hero: {
      title: 'ترفيه IPTV متميز للجميع',
      subtitle: 'استمتع بأكثر من 20,000 قناة مباشرة و80,000 فيلم ومسلسل بدقة 4K/UHD. بث مستقر وسريع وآمن على جميع أجهزتك.',
      cta: 'اختر باقة',
      secondaryCta: 'الدعم الفني',
    },
    features: {
      title: 'لماذا تختار IPTVinov؟',
      items: [
        { title: 'جودة 4K/UHD', desc: 'دقة فائقة الوضوح لجميع القنوات الرياضية والسينمائية الكبرى.' },
        { title: 'قنوات عالمية', desc: 'الوصول إلى قنوات من الدول العربية، فرنسا، أمريكا، وأكثر من 50 دولة أخرى.' },
        { title: 'متعدد الأجهزة', desc: 'متوافق مع الشاشات الذكية، أندرويد، آيفون، Mag و Firestick.' },
        { title: 'ثبات بنسبة \u200E99.9%', desc: 'تقنية مانع التقطيع لتجربة مشاهدة سلسة بدون توقف.' },
      ],
    },
    testimonials: {
      title: 'ماذا يقول عملاؤنا',
      subtitle: 'لقطات شاشة حقيقية من مجتمعنا السعيد حول العالم.',
      status: 'متصل الآن',
    },
    pricing: {
      title: 'اشتراكاتنا',
      subtitle: 'اختر الباقة الأنسب لاحتياجاتك.',
      buyNow: 'اشترك عبر واتساب',
      plans: {
        monthly: {
          name: 'شهري', price: '\u200E10€', period: '/شهريا',
          features: ['أكثر من 20,000 قناة', 'أكثر من 80,000 فيلم', 'دعم 4K / UHD', 'دعم فني \u200E24/7', 'جهاز واحد']
        },
        sixMonths: {
          name: '6 أشهر', price: '\u200E45€', period: '/6 أشهر',
          features: ['كل مميزات الاشتراك الشهري', 'روابط سيرفر متعددة', 'دليل القنوات EPG', 'خدمة المراجعة', 'تقنية مانع التقطيع'],
          badge: 'الأكثر طلباً'
        },
        annually: {
          name: 'سنوي', price: '\u200E70€', period: '/سنوياً',
          features: ['وصول كامل لمدة سنة', 'دعم تقني متميز', 'جميع صيغ الأجهزة', 'يدعم VPN', 'أفضل قيمة مقابل السعر'],
          badge: 'أفضل عرض'
        }
      }
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'لديك أسئلة قبل الشراء؟ فريقنا متوفر 24/7 لمساعدتك.',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      message: 'كيف يمكننا مساعدتك؟',
      send: 'إرسال الرسالة',
      success: 'شكراً لك! سنتواصل معك في أقرب وقت ممكن.',
      errorEmail: 'يرجى إدخال بريد إلكتروني صحيح.',
      errorMessage: 'يجب أن تكون الرسالة 10 أحرف على الأقل.',
      errorName: 'الاسم مطلوب.',
      emailUs: 'بريدنا',
      whatsapp: 'واتساب'
    },
    footer: {
      rights: '© 2025 IPTVinov. جميع الحقوق محفوظة.',
      social: 'تابعنا',
      privacy: 'سياسة الخصوصية',
    },
    assistant: {
      title: 'الدعم الذكي',
      placeholder: 'اسأل عن القنوات، التثبيت...',
      welcome: 'مرحباً! أنا مساعد IPTVinov. كيف يمكنني مساعدتك اليوم؟',
    },
    // FIX: Added reseller translations.
    reseller: {
      title: 'كن موزعًا',
      subtitle: 'ابدأ عملك الخاص في مجال IPTV مع لوحة الموزعين القوية لدينا.',
      cta: 'كن موزعًا',
      plans: {
        standard: {
          name: 'لوحة قياسية',
          price: '\u200E150€',
          period: '',
          features: ['50 رصيدًا متضمنًا', 'لوحة تحكم كاملة', 'دعم الموزعين \u200E24/7', 'إنشاء باقات مخصصة', 'إدارة المستخدمين'],
          badge: 'ابدأ الآن'
        },
        super: {
          name: 'لوحة سوبر',
          price: '\u200E300€',
          period: '',
          features: ['120 رصيدًا متضمنًا', 'أدوات إدارة متقدمة', 'دعم ذو أولوية', 'وصول API', 'خيارات العلامة البيضاء'],
          badge: 'خيار المحترفين'
        }
      }
    }
  }
};