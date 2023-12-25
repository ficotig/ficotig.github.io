import React from 'react';
import Style from './Home.module.scss';
import me from '../../img/self.jpeg';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";

const bioBullets = [
   {
      link: "",
      emoji: "🎹",
      text: "Besides programming, I am also interested in music, especially musical instruments. However, I am not skilled at playing them",
   },
   {
      link: '',
      emoji: "🧑‍💻",
      text: "I have a passion for programming games that feature simple yet addictive gameplay and graphics"
   },
   {
      link: "https://www.google.com/maps/place/M%E1%BB%B9+Qu%C3%BD,+Th%C3%A1p+M%C6%B0%E1%BB%9Di,+%C4%90%E1%BB%93ng+Th%C3%A1p,+Vi%E1%BB%87t+Nam/@10.5448513,105.7158983,13z/data=!3m1!4b1!4m6!3m5!1s0x310a6048a97f23bd:0x263fc98dae3291f1!8m2!3d10.5453505!4d105.7468535!16s%2Fg%2F1tdq3g97?hl=vi-VN&entry=ttu",
      emoji: "🏡",
      text: "I live in Dong Thap province"
   },
   {
      link: "mailto:nhutthanh340@gmail.com?subject=Let's work on something together!",
      emoji: "✉️",
      text: "Let's get in touch!"
   }
];

const socials = [
   {
      link: "https://play.google.com/store/apps/dev?id=6186427241683856830",
      icon: "fa-brands fa-google-play",
      label: 'Google Play'
   },
   {
      link: 'https://www.tiktok.com/@nhut.thanh.66',
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

   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed)} component={'img'} alt={'image of woman with brown curly hair and glasses smiling at the camera'} src={me} width={{xs: '36vh', md: '41vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1>Hi, I am <span className={Style.firstName}>Thanh</span><span className={Style.hand}>✌️</span>
            </h1>
            <h2>I am a Unity developer who works as a freelancer</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {bioBullets.map((bio, index) => (
                  <li key={index}>
                     <EmojiBullet link={bio.link} emoji={bio.emoji} text={bio.text}/>
                  </li>
               ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}}>
               {socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
      </Box>
   )
}