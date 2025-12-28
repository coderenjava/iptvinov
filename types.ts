

export type Language = 'en' | 'fr' | 'ar' | 'es';

export interface PlanStrings {
  name: string;
  price: string;
  period: string;
  features: string[];
  badge?: string;
}

export interface TranslationStrings {
  nav: {
    home: string;
    features: string;
    pricing: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
  };
  features: {
    title: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    status: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    buyNow: string;
    plans: {
      monthly: PlanStrings;
      sixMonths: PlanStrings;
      annually: PlanStrings;
    };
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
    errorEmail: string;
    errorMessage: string;
    errorName: string;
    subtitle: string;
    emailUs: string;
    whatsapp: string;
  };
  footer: {
    rights: string;
    social: string;
    privacy: string;
  };
  assistant: {
    title: string;
    placeholder: string;
    welcome: string;
  };
  // FIX: Added 'reseller' property to support reseller page translations and resolve type errors in Reseller.tsx.
  reseller: {
    title: string;
    subtitle: string;
    cta: string;
    plans: {
      standard: PlanStrings;
      super: PlanStrings;
    };
  };
}
