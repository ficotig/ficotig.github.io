import Style from './Home.module.scss';
import icon from '../../img/icon.png';
import classNames from 'classnames';
import AppIcon from "./AppIcon";
import { Box } from "@mui/material";


const socials = [
   {
      link: "https://play.google.com/store/apps/details?id=com.hongusac.kalimba",
      icon: "fa-brands fa-google-play",
      label: 'Google Play'
   },
   {
      link: 'https://apps.apple.com/us/app/kalimba-fun/id6751787933',
      icon: "fa-brands fa-app-store-ios",
      label: 'App Store'
   }
]

export default function KalimbaFun() {

   return (
      <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
         justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.iconApp, Style.shadowed)} component={'img'} alt={'kalimba fun'} src={icon} width={{ xs: '50vh', md: '50vh' }}
            height={{ xs: '50vh', md: '50vh' }}
            borderRadius={'30%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />
         <Box>
            <h1><span className={Style.appName}>Kalimba Fun</span></h1>
            <br />
            <br />
            <h2>Learn and play the kalimba easily</h2>
            <br />
            <h2>Enjoy the exciting music</h2>
            <br />
            <br />
            <br />
            <Box display={'flex'} gap={'5.5rem'} justifyContent={'center'} fontSize={{ xs: '5rem', md: '6.125rem' }}>
               {socials.map((social, index) => (
                  <div style={{ textAlign: "center" }}>
                     <AppIcon key={index} link={social.link} icon={social.icon} label={social.label} />
                  </div>
               ))}
            </Box>
         </Box>
      </Box>
   )
}