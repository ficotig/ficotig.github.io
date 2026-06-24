import React from 'react';
import { useTranslation } from "../context/LanguageContext";

const containerStyle = {
   display: 'inline-flex',
   alignItems: 'center',
   gap: '2px',
   padding: '3px',
   borderRadius: '999px',
   cursor: 'pointer',
   userSelect: 'none',
};

const pillStyle = (isActive) => ({
   fontSize: '0.78rem',
   fontWeight: isActive ? 700 : 500,
   padding: '3px 10px',
   borderRadius: '999px',
   transition: 'all 250ms cubic-bezier(0.34, 1.56, 0.64, 1)',
   background: isActive ? 'linear-gradient(135deg, #8D53FF, #CA6BE6)' : 'transparent',
   color: isActive ? '#fff' : 'inherit',
   opacity: isActive ? 1 : 0.5,
   letterSpacing: '0.04em',
   lineHeight: 1,
});

export default function LanguageToggler() {
   const { language, setLanguage } = useTranslation();

   return (
      <div
         style={containerStyle}
         role="group"
         aria-label="Language selector"
      >
         <button
            style={{
               ...pillStyle(language === 'en'),
               border: 'none',
               cursor: 'pointer',
               background: language === 'en' ? 'linear-gradient(135deg, #8D53FF, #CA6BE6)' : 'transparent',
            }}
            onClick={() => setLanguage('en')}
            aria-pressed={language === 'en'}
            aria-label="Switch to English"
         >
            EN
         </button>
         <button
            style={{
               ...pillStyle(language === 'vi'),
               border: 'none',
               cursor: 'pointer',
               background: language === 'vi' ? 'linear-gradient(135deg, #8D53FF, #CA6BE6)' : 'transparent',
            }}
            onClick={() => setLanguage('vi')}
            aria-pressed={language === 'vi'}
            aria-label="Switch to Vietnamese"
         >
            VI
         </button>
      </div>
   );
}
