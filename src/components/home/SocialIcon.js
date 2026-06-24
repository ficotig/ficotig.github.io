import React from 'react';

const iconStyle = {
   display: 'inline-flex',
   alignItems: 'center',
   justifyContent: 'center',
   width: '2.5rem',
   height: '2.5rem',
   borderRadius: '50%',
   transition: 'transform 280ms cubic-bezier(0.34, 1.56, 0.64, 1), color 250ms ease, filter 250ms ease',
   cursor: 'pointer',
};

function SocialIcon({ link, icon, label }) {
   return (
      <a
         target="_blank"
         aria-label={label}
         rel="noopener noreferrer"
         href={link}
         style={iconStyle}
         onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-5px) scale(1.15)';
            e.currentTarget.style.filter = 'drop-shadow(0 4px 12px rgba(141, 83, 255, 0.55))';
         }}
         onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.filter = 'none';
         }}
      >
         <i className={icon} aria-hidden="true" />
      </a>
   );
}

export default SocialIcon;