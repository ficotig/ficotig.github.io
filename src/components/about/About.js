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
         <p><span className={Style.pink}>ficotig $</span> cd profile/guidingPrinciples</p>
         <p><span className={Style.pink}>ficotig/profile/guidingPrinciples <span className={Style.green}>(main)</span> $</span> ls</p>
         <span className={Style.green}>
         I am quiet, yet I have an unwavering desire to perfect every detail in everything I do. Carelessness is something I cannot tolerate because, to me, quality is the cornerstone of any product's value.

I am passionate about developing applications with simple yet elegant and captivating designs. Every line and every color are meticulously crafted, as I believe simplicity should never equate to mediocrity. I continuously listen to user feedback, treating it as a guiding compass to refine my creations and improve myself.

Put your heart and dedication into everything you do, for the smallest details create the greatest impact. The diligence you show today lays the foundation for lasting value tomorrow. I am not just creating products but also crafting inspiration and connections.
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