import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {useTranslation} from '../../context/LanguageContext';


export default function PolicyAndPrivacy() {
   const {t} = useTranslation();

   function PolicyAndPrivacyText() {
      const introParts = t('policy.introText1').split('https://ficotig.github.io');
      const contactParts = t('policy.contactText').split('nhutthanh340@gmail.com');
      const providersList = t('policy.providersList') || [];

      return <>
         <p><span className={Style.pink}>ficotig $</span> cat PolicyPrivacy </p>
         <p><span className={Style.pink}>PolicyPrivacy <span className={Style.green}>(main)</span> $ </span> ls <br/>  <br/>
         {introParts[0]}
         <a target={'_blank'} rel={'noreferrer'} href='https://ficotig.github.io'>https://ficotig.github.io</a>
         {introParts[1]}
         </p>
         <p>
         {t('policy.introText2')}
         </p>
         <br/>
         <span className={Style.green}>{t('policy.collectionTitle')}</span>
         <p>
         {t('policy.collectionText1')}
         </p>
         <p>{t('policy.collectionText2')}</p>
         <br/>
         <span className={Style.green}>{t('policy.logDataTitle')}</span>
         <p>
         {t('policy.logDataText')}
         </p>
         <br/>
         <span className={Style.green}>{t('policy.cookiesTitle')}</span>
         <p>
         {t('policy.cookiesText1')}
         </p>
         <p>
         {t('policy.cookiesText2')}
         </p>
         <br/>
         <span className={Style.green}>{t('policy.providersTitle')}</span>
         <p>{t('policy.providersIntro')}</p>
         {providersList.map((item, idx) => (
            <p key={idx}>- {item}</p>
         ))}
         <p>{t('policy.providersOutro')}</p>
         <br/>
         <span className={Style.green}>{t('policy.securityTitle')}</span>
         <p>
         {t('policy.securityText')}
         </p>
         <br/>
         <span className={Style.green}>{t('policy.linksTitle')}</span>
         <p>
         {t('policy.linksText')}
         </p>
         <br/>
         <span className={Style.green}>{t('policy.childrenTitle')}</span>
         <p>
         {t('policy.childrenText')}
         </p>
         <br/>
         <span className={Style.green}>{t('policy.changesTitle')}</span>
         <p>{t('policy.changesText')}</p>
         <br/>
         <span className={Style.green}>{t('policy.contactTitle')}</span>
         <p>
         {contactParts[0]}
         <a target={'_blank'} rel={'noreferrer'} href='mailto:nhutthanh340@gmail.com'>nhutthanh340@gmail.com</a>
         {contactParts[1]}
         </p>
      </>;
   }

   return (
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
         <Terminal text={PolicyAndPrivacyText()}/>
      </Box>
   )
}