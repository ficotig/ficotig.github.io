import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import moment from "moment";
import { useTranslation } from '../../context/LanguageContext';

export default function About() {
   const { t } = useTranslation();
   const age = moment().local().format('YYYY') - 1998;

   function aboutMeText() {
      return <>
         <p><span className={Style.pink}>ficotig $</span> cat profile </p>
         <p><span className={Style.pink}>ficotig/profile <span className={Style.green}>(main)</span> $ </span> ls</p>
         <p><span className={Style.yellow}> {t('about.title')}</span></p>
         <ul>
            <li>{t('about.fullName')}: Pham Nhut Thanh</li>
            <li>{t('about.yob')}: {t(age === 1 ? 'about.yobText' : 'about.yobTextPlural', { age })}</li>
            <li>{t('about.province')}: {t('about.provinceVal')}</li>
            <li>{t('about.job')}: {t('about.jobVal')}</li>
            <li>{t('about.degree')}: {t('about.degreeVal')}</li>
            <li>{t('about.major')}: {t('about.majorVal')}</li>
            <li>{t('about.hobbies')}: {t('about.hobbiesVal')}</li>
            <li>{t('about.marriage')}: {t('about.marriageVal')}</li>
            <li>{t('about.interestedIn')}: {t('about.interestedInVal')}</li>
         </ul>
      </>;
   }

   function philosophyOfLifeText() {
      const principles = t('about.principles') || [];
      return <>
         <p><span className={Style.pink}>ficotig $</span> cd profile/guidingPrinciples</p>
         <p><span className={Style.pink}>ficotig/profile/guidingPrinciples <span className={Style.green}>(main)</span> $</span> ls</p>
         <span className={Style.green}>
            {principles.map((pText, index) => (
               <p key={index} style={{ marginBottom: index < principles.length - 1 ? '1rem' : 0 }}>
                  {pText}
               </p>
            ))}
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