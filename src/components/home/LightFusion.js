import Style from './Home.module.scss';
import icon from '../../img/light-fusion.png';
import classNames from 'classnames';
import AppIcon from "./AppIcon";
import { Box } from "@mui/material";

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
]

export default function LightFusion() {
   return (
      <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
         justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.iconApp, Style.shadowed)} component={'img'} alt={'light fusion'} src={icon} width={{ xs: '45vh', md: '45vh' }}
            height={{ xs: '45vh', md: '45vh' }}
            borderRadius={'30%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />
         <Box>
            <h1><span className={Style.appName}>Light Fusion</span></h1>
            <br />
            <h2>The Ultimate Light & Color Puzzle Game</h2>
            <h2>Explore a mesmerizing world where light, color, and logic collide</h2>
            <br />
            <br />
            <Box display={'flex'} gap={'5.5rem'} justifyContent={'center'} fontSize={{ xs: '5rem', md: '6.125rem' }}>
               {socials.map((social, index) => (
                  <div style={{ textAlign: "center" }} key={index}>
                     <AppIcon link={social.link} icon={social.icon} label={social.label} />
                  </div>
               ))}
            </Box>
         </Box>
      </Box>
   )
}
