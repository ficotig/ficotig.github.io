import React, {useState, useEffect} from 'react';
import logo from '../img/logo.png';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import LanguageToggler from "./LanguageToggler";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import {useTranslation} from "../context/LanguageContext";

export default function Navbar({darkMode, handleClick}) {
   const location = useLocation();
   const [active, setActive] = useState('home');
   const [scrolled, setScrolled] = useState(false);
   const {t} = useTranslation();

   // Keep active link in sync with URL (handles back/forward navigation)
   useEffect(() => {
      const path = location.pathname;
      if (path === '/') setActive('home');
      else setActive(path.slice(1));
   }, [location.pathname]);

   // Add shadow on scroll
   useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 8);
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const links = [
      {
         name: t('nav.home'),
         to: '/',
         active: 'home'
      },
      {
         name: t('nav.about'),
         to: '/about',
         active: 'about'
      },
      {
         image: logo,
         to: '/',
         active: 'home'
      },
      {
         name: t('nav.policy'),
         to: '/privacy-policy',
         active: 'privacy-policy'
      },
   ]

   return (
      <Box component={'nav'} width={'100%'} className={scrolled ? Style.navScrolled : ''}>
         <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
              gap={{xs: '1rem', md: '5rem'}}
              fontSize={'1rem'}>
            {links.map((link, index) => (
                <li className={(link.active === active && !link.image) ? Style.active : ''} key={index}>
                   <Link aria-label={'home page'} to={link.to} onClick={() => setActive(link.active)}>
                      {link.name && <p style={{paddingBottom: '0.5rem'}}>{link.name}</p>}
                      {link.image && <img alt={''} src={link.image} style={{maxWidth: '75px'}}/>}
                   </Link>
                </li>
            ))}
            <li>
               <LanguageToggler />
            </li>
            <li>
               <Toggler darkMode={darkMode} handleClick={handleClick}/>
            </li>
         </Box>
      </Box>
   )
}