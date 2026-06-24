import React from 'react';
import Style from './SocialIcon.module.scss';

// Map label → brand CSS class
const brandClassMap = {
   'App Store':   Style.appStore,
   'Google Play': Style.googlePlay,
   'Tiktok':      Style.tiktok,
   'Youtube':     Style.youtube,
};

function SocialIcon({ link, icon, label }) {
   const brandClass = brandClassMap[label] || '';

   return (
      <a
         target="_blank"
         aria-label={label}
         rel="noopener noreferrer"
         href={link}
         className={`${Style.socialBtn} ${brandClass}`}
      >
         <i className={icon} aria-hidden="true" />
         <span className={Style.label}>{label}</span>
      </a>
   );
}

export default SocialIcon;