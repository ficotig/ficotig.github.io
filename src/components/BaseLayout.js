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
export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);

   function handleClick() {
      setDarkMode(!darkMode);
   }

   useEffect(() => {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      setDarkMode(darkModeMediaQuery.matches);

      const handleChange = (e) => {
         setDarkMode(e.matches);
      };

      darkModeMediaQuery.addEventListener('change', handleChange);

      // Clear the event listener when the component unmounts
      return () => {
         darkModeMediaQuery.removeEventListener('change', handleChange);
      };
   }, []);

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
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                  py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                  {moment().local().format('YYYY')}
               </Box>
            </Grid> 
         </Grid>
      </Box>
   )
}

