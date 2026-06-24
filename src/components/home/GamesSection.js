import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Style from './GamesSection.module.scss';
import kalimbaIcon from '../../img/icon.png';
import lightFusionIcon from '../../img/light-fusion.png';
import { useTranslation } from '../../context/LanguageContext';

export default function GamesSection() {
   const sectionRef = useRef(null);
   const [visible, setVisible] = useState(false);
   const { t } = useTranslation();

   const games = [
      {
         name: 'Kalimba Fun',
         tagline: t('games.kalimba.tagline'),
         description: t('games.kalimba.description'),
         icon: kalimbaIcon,
         route: '/kalimba-fun',
         gradientClass: Style.gradientKalimba,
         hoverClass: Style.cardKalimba,
         stores: [
            {
               link: 'https://play.google.com/store/apps/details?id=com.hongusac.kalimba',
               icon: 'fa-brands fa-google-play',
               label: 'Google Play',
            },
            {
               link: 'https://apps.apple.com/us/app/kalimba-fun/id6751787933',
               icon: 'fa-brands fa-app-store-ios',
               label: 'App Store',
            },
         ],
      },
      {
         name: 'Light Fusion',
         tagline: t('games.lightFusion.tagline'),
         description: t('games.lightFusion.description'),
         icon: lightFusionIcon,
         route: '/light-fusion',
         gradientClass: Style.gradientLightFusion,
         hoverClass: Style.cardLightFusion,
         stores: [
            {
               link: 'https://play.google.com/store/apps/details?id=com.ficotig.lightfusion',
               icon: 'fa-brands fa-google-play',
               label: 'Google Play',
            },
            {
               link: 'https://apps.apple.com/us/app/light-fusion/id6759330042',
               icon: 'fa-brands fa-app-store-ios',
               label: 'App Store',
            },
         ],
      },
   ];

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setVisible(true);
               observer.disconnect();
            }
         },
         { threshold: 0.15 }
      );
      if (sectionRef.current) observer.observe(sectionRef.current);
      return () => observer.disconnect();
   }, []);

   return (
      <section ref={sectionRef} className={Style.section}>
         <div className={Style.separator} />
         <div className={Style.header}>
            <h2 className={Style.sectionTitle}>{t('games.title')}</h2>
            <div className={Style.divider} />
         </div>
         <div className={Style.cardList}>
            {games.map((game, index) => (
               <div
                  key={game.name}
                  className={`${Style.card} ${game.hoverClass} ${visible ? Style.cardVisible : ''}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
               >
                  <div className={`${Style.iconWrapper} ${game.gradientClass}`}>
                     <Link to={game.route} aria-label={`View ${game.name} details`}>
                        <img
                           src={game.icon}
                           alt={game.name}
                           className={Style.appIcon}
                        />
                     </Link>
                  </div>
                  <div className={Style.cardContent}>
                     <Link to={game.route} className={Style.appNameLink}>
                        <h3 className={Style.appName}>{game.name}</h3>
                     </Link>
                     <p className={Style.tagline}>{game.tagline}</p>
                     <p className={Style.description}>{game.description}</p>
                     <div className={Style.storeButtons}>
                        {game.stores.map((store) => (
                           <a
                              key={store.label}
                              href={store.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={Style.storeBtn}
                              aria-label={`Download ${game.name} on ${store.label}`}
                           >
                              <i className={store.icon} aria-hidden="true" />
                              <span>{store.label}</span>
                           </a>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}

