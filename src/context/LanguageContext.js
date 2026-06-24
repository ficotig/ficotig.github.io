import React, { createContext, useContext, useState } from 'react';
import { translations } from './translation';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Read initial language from localStorage, default to 'en'
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved === 'vi' || saved === 'en' ? saved : 'en';
  });

  const setLanguage = (lang) => {
    if (lang === 'en' || lang === 'vi') {
      setLanguageState(lang);
      localStorage.setItem('language', lang);
    }
  };

  // Translation helper function
  const t = (key, params = {}) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        return key;
      }
    }
    if (typeof value === 'string') {
      let result = value;
      for (const [paramKey, paramValue] of Object.entries(params)) {
        result = result.replace(`{${paramKey}}`, paramValue);
      }
      return result;
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
