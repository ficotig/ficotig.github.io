import React, { useState, useEffect } from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import moment from "moment";
import PolicyAndPrivacy from './about/PolicyAndPrivacy';
import KalimbaFun from './home/KalimbaFun';
import LightFusion from './home/LightFusion';
export default function BaseLayout() {
   // userOverride = null means "auto by time", true/false means manually set
   const [darkMode, setDarkMode] = useState(() => {
      const hour = new Date().getHours();
      return hour < 6 || hour >= 18; // dark outside 06:00–18:00
   });
   const [userOverride, setUserOverride] = useState(null);

   // Manual toggle — records override so auto-timer won't fight the user
   function handleClick() {
      const next = !darkMode;
      setDarkMode(next);
      setUserOverride(next);
   }

   // Auto-switch by time every minute (only when user hasn't overridden)
   useEffect(() => {
      const getAutoDark = () => {
         const hour = new Date().getHours();
         return hour < 6 || hour >= 18;
      };

      const tick = () => {
         if (userOverride === null) {
            setDarkMode(getAutoDark());
         }
      };

      const interval = setInterval(tick, 60_000);
      return () => clearInterval(interval);
   }, [userOverride]);

   // Sync body class
   useEffect(() => {
      if (darkMode) {
         document.body.classList.add('dark');
         document.body.classList.remove('light');
      } else {
         document.body.classList.add('light');
         document.body.classList.remove('dark');
      }
   }, [darkMode]);

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
            justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleClick} />
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home />} />
                  <Route path={'/about'} element={<About />} />
                  <Route path={'/privacy-policy'} element={<PolicyAndPrivacy />} />
                  <Route path={'/kalimba-fun'} element={<KalimbaFun />} />
                  <Route path={'/light-fusion'} element={<LightFusion />} />
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} className={Style.footer} display={'flex'} flexDirection={'column'} alignItems={'center'}
                  py={'1.5rem'} width={'100%'}>
                  {moment().local().format('YYYY')}
               </Box>
            </Grid> 
         </Grid>
      </Box>
   )
}

