import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import moment from "moment";

export default function About() {

   function aboutMeText() {
      return <>
         <p><span className={Style.pink}>ficotig $</span> cat profile </p>
         <p><span className={Style.pink}>ficotig/profile <span className={Style.green}>(main)</span> $ </span> ls</p>
         <p><span className={Style.yellow}> ***** My Profile *****</span></p>
         <ul>
            <li>Full Name: Pham Nhut Thanh</li>
            <li>Year of Birth: 1998 🐯 ({moment().local().format('YYYY') - 1998} year old)</li>
            <li>Province: Dong Thap</li>
            <li>Job: Freelance programmer</li>
            <li>Degree: I graduated from the University of Science in Ho Chi Minh City</li>
            <li>Major: Software engineering</li>
            <li>Hobbies: Listen to music, and watch movies on Netflix, or travel</li>
            <li>Marriage: None</li>
            <li>Interested in: Girls</li>
         </ul>
      </>;
   }

   function philosophyOfLifeText() {
      return <>
         <p><span className={Style.pink}>ficotig $</span> cd profile/philosophyOfLife</p>
         <p><span className={Style.pink}>ficotig/profile/philosophyOfLife <span className={Style.green}>(main)</span> $</span> ls</p>
         <span className={Style.green}>
         I have a quiet personality and I am always striving for perfection in everything I do. I despise carelessness and consider quality to be the most important criterion for the products I create. I am passionate about developing applications with simple yet high-quality and captivating graphics. I pay close attention to how users feel so that I can improve the quality of my applications and enhance my value.
         </span>
      </>;
   }

   return (
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
         <Terminal text={aboutMeText()} />
         <Terminal text={philosophyOfLifeText()} />
      </Box>
   )
}