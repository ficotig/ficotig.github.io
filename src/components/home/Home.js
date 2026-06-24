import React, {useState, useEffect} from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import GamesSection from "./GamesSection";
import {Box} from "@mui/material";
import {useTranslation} from "../../context/LanguageContext";

const socials = [
   {
      link: "https://apps.apple.com/us/developer/nhut-thanh-pham/id1836827722",
      icon: "fa-brands fa-app-store-ios",
      label: 'App Store'
   },
   {
      link: "https://play.google.com/store/apps/dev?id=6186427241683856830",
      icon: "fa-brands fa-google-play",
      label: 'Google Play'
   },
   {
      link: 'https://www.tiktok.com/@kalimba.fun',
      icon: "fa-brands fa-tiktok",
      label: 'Tiktok'
   },
   {
      link: 'https://www.youtube.com/@ficotig',
      icon: "fa-brands fa-youtube",
      label: 'Youtube'
   }
]

export default function Home() {
   const {t} = useTranslation();
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 80);
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const bioBullets = [
      {
         link: "",
         emoji: "🎹",
         text: t('home.bio.music'),
      },
      {
         link: '',
         emoji: "🧑‍💻",
         text: t('home.bio.game')
      },
      {
         link: "https://www.google.com/maps/place/M%E1%BB%B9+Qu%C3%BD,+Th%C3%A1p+M%C6%B0%E1%BB%9Di,+%C4%90%E1%BB%93ng+Th%C3%A1p,+Vi%E1%BB%87t+Nam/@10.5448513,105.7158983,13z/data=!3m1!4b1!4m6!3m5!1s0x310a6048a97f23bd:0x263fc98dae3291f1!8m2!3d10.5453505!4d105.7468535!16s%2Fg%2F1tdq3g97?hl=vi-VN&entry=ttu",
         emoji: "🏡",
         text: t('home.bio.location')
      },
      {
         link: "mailto:nhutthanh340@gmail.com?subject=Let's work on something together!",
         emoji: "✉️",
         text: t('home.bio.contact')
      }
   ];

   return (
      <Box component={'main'} display={'flex'} flexDirection={'column'}>
         {/* ── Hero section ── */}
         <Box display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
              justifyContent={'center'} minHeight={'calc(100vh - 80px)'}
              px={{xs: '1.5rem', md: '3rem'}} gap={{xs: '2rem', md: '3rem'}}
              position={'relative'} overflow={'hidden'}>

            {/* Decorative ambient glow blobs */}
            <Box
               sx={{
                  position: 'absolute', top: '10%', left: '5%',
                  width: '280px', height: '280px', borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(141,83,255,0.12) 0%, transparent 70%)',
                  filter: 'blur(40px)', pointerEvents: 'none', zIndex: 0,
               }}
            />
            <Box
               sx={{
                  position: 'absolute', bottom: '15%', right: '8%',
                  width: '200px', height: '200px', borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(202,107,230,0.10) 0%, transparent 70%)',
                  filter: 'blur(32px)', pointerEvents: 'none', zIndex: 0,
               }}
            />

            {/* Avatar with entrance + float animation */}
            <Box
               className={classNames(Style.avatar, Style.shadowed, Style.heroAvatar)}
               component={'img'}
               alt={'image of man smiling at the camera'}
               src={me}
               width={{xs: '260px', md: '300px'}}
               height={{xs: '260px', md: '300px'}}
               borderRadius={'50%'}
               p={'0.75rem'}
               sx={{ flexShrink: 0, position: 'relative', zIndex: 1 }}
            />

            {/* Text content with staggered entrance animations */}
            <Box maxWidth={'560px'} sx={{ position: 'relative', zIndex: 1 }}>
               <Box className={Style.heroText}>
                  <h1>
                     {t('home.greeting')}
                     <span className={Style.firstName}>{t('home.name')}</span>
                     <span className={Style.hand}> ✌️</span>
                  </h1>
               </Box>

               <Box className={Style.heroSubText}>
                  <h2>{t('home.role')}</h2>
               </Box>

               <Box component={'ul'} p={'0.8rem'} className={Style.heroBullets}>
                  {bioBullets.map((bio, index) => (
                     <li key={index} style={{ transitionDelay: `${index * 60}ms` }}>
                        <EmojiBullet link={bio.link} emoji={bio.emoji} text={bio.text}/>
                     </li>
                  ))}
               </Box>

               <Box
                  display={'flex'} gap={'1.5rem'} justifyContent={'center'}
                  fontSize={{xs: '2rem', md: '2.5rem'}}
                  className={Style.heroSocials}
               >
                  {socials.map((social, index) => (
                     <SocialIcon key={social.link} link={social.link} icon={social.icon} label={social.label} />
                  ))}
               </Box>
            </Box>

            {/* Scroll indicator arrow */}
            <Box
               className={Style.scrollIndicator}
               sx={{ opacity: scrolled ? 0 : 1, transition: 'opacity 400ms ease' }}
            >
               <span className={Style.scrollArrow}>↓</span>
            </Box>
         </Box>

         {/* ── Games section ── */}
         <GamesSection />
      </Box>
   )
}