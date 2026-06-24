import React from 'react';
import DetailStyle from './AppDetail.module.scss';
import HomeStyle from './Home.module.scss';
import icon from '../../img/light-fusion.png';
import classNames from 'classnames';
import { useTranslation } from '../../context/LanguageContext';

const socials = [
   {
      link: "https://play.google.com/store/apps/details?id=com.ficotig.lightfusion",
      icon: "fa-brands fa-google-play",
      label: 'Google Play'
   },
   {
      link: 'https://apps.apple.com/us/app/light-fusion/id6759330042',
      icon: "fa-brands fa-app-store-ios",
      label: 'App Store'
   }
];

export default function LightFusion() {
   const { t } = useTranslation();

   return (
      <div className={DetailStyle.page}>
         <div className={DetailStyle.contentRow}>

            {/* App icon with entrance + float animation */}
            <div
               className={DetailStyle.iconContainer}
               style={{ '--glow-color': 'rgba(141, 83, 255, 0.3)' }}
            >
               <img
                  className={classNames(DetailStyle.appIcon, DetailStyle.iconEntrance, HomeStyle.shadowed)}
                  src={icon}
                  alt="Light Fusion app icon"
                  style={{
                     width: '260px',
                     height: '260px',
                     borderRadius: '30%',
                     objectFit: 'cover',
                  }}
               />
            </div>

            {/* Text content */}
            <div className={DetailStyle.textContent}>
               <h1 className={DetailStyle.appTitle}>
                  <span className={DetailStyle.titleLightFusion}>Light Fusion</span>
               </h1>
               <p className={DetailStyle.tagline}>{t('games.lightFusion.tagline')}</p>
               <p className={classNames(DetailStyle.description, DetailStyle.revealed)}>
                  {t('games.lightFusion.description')}
               </p>

               <div className={DetailStyle.storeRow}>
                  {socials.map((social) => (
                     <a
                        key={social.link}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={DetailStyle.storeLink}
                        aria-label={`Download Light Fusion on ${social.label}`}
                     >
                        <i className={social.icon} aria-hidden="true" />
                        <span>{social.label}</span>
                     </a>
                  ))}
               </div>
            </div>

         </div>
      </div>
   );
}
