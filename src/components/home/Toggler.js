import React from 'react';

const toggleStyle = {
   fontSize: '1.3rem',
   cursor: 'pointer',
   display: 'inline-flex',
   alignItems: 'center',
   justifyContent: 'center',
   width: '2.2rem',
   height: '2.2rem',
   borderRadius: '50%',
   transition: 'all 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
   border: 'none',
   background: 'transparent',
};

export default function Toggler({ darkMode, handleClick }) {
   return (
      <button
         onClick={handleClick}
         aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
         title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
         style={toggleStyle}
         onMouseEnter={e => {
            e.currentTarget.style.transform = 'rotate(20deg) scale(1.2)';
         }}
         onMouseLeave={e => {
            e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
         }}
      >
         {darkMode ? (
            <i className="fa-solid fa-moon" style={{ color: '#F1C40F', fontSize: '1.25rem' }} />
         ) : (
            <i className="fa-solid fa-sun" style={{ color: '#F39C12', fontSize: '1.25rem' }} />
         )}
      </button>
   );
}