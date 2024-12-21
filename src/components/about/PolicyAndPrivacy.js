import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";


export default function PolicyAndPrivacy() {

   function PolicyAndPrivacyText() {
      return <>
         <p><span className={Style.pink}>ficotig $</span> cat PolicyPrivacy </p>
         <p><span className={Style.pink}>PolicyPrivacy <span className={Style.green}>(main)</span> $ </span> ls <br/>  <br/>
         Thank you for visiting the <span className={Style.ficotig}>Ficotig</span> website located at <a target={'_blank'} rel={'noreferrer'} href='https://ficotig.github.io'>https://ficotig.github.io</a>. This Privacy Policy outlines our policies for the use and collection of personally identifiable information and aggregate data about users of our site and products
         </p>
         <p>
         This page is used to inform you of our policies regarding the collection, use, and disclosure of personal information if you decide to use our services. By using our services, you agree to the collection and use of information by this policy. The personal information we collect will only be used to provide and improve our services, and we will not share it with anyone except as described in this Privacy Policy.
         </p>
         <br/>
         <span className={Style.green}>Information Collection and Use</span>
         <p>
         To improve your experience while using our services, we may ask you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this Privacy Policy.
         </p>
         <p>Our app uses third-party services, including Google and Facebook, which may collect information used to identify you.</p>
         <br/>
         <span className={Style.green}>Log Data</span>
         <p>
         We collect data and information through third-party products on your device called Log Data when you use our services, in case of an error in the app. This Log Data may include information such as your device's Internet Protocol IP address, device name, operating system version, the app's configuration when utilizing our services, the time and date of your use of the service, and other statistics.
         </p>
         <br/>
         <span className={Style.green}>Cookies</span>
         <p>
         Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
         </p>
         <p>
         Our service does not use cookies explicitly. However, our app may use third-party code and libraries that use cookies to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of our services.
         </p>
         <br/>
         <span className={Style.green}>Service Providers</span>
         <p>We may employ third-party companies and individuals for the following reasons:</p>
         <p>
         To facilitate our services
         </p>
         <p>
         To provide the services on our behalf
         </p>
         <p>
         To perform service-related services
         </p>
         <p>
         To assist us in analyzing how our services are used
         </p>
         <p>We want to inform users of this service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
         <br/>
         <span className={Style.green}>Security</span>
         <p>
         We value your trust in providing us with your Personal Information, thus we are striving to use commercially acceptable means of protecting it. However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
         </p>
         <br/>
         <span className={Style.green}>Links to Other Sites</span>
         <p>
         Our services may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
         </p>
         <br/>
         <span className={Style.green}>Children’s Privacy</span>
         <p>
         Our services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we discover that a child under 13 has provided us with personal information, we immediately delete this information from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take the necessary actions.
         </p>
         <br/>
         <span className={Style.green}>Changes to This Privacy Policy</span>
         <p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.</p>
         <br/>
         <span className={Style.green}>Contact Us</span>
         <p>
         If you have any questions or suggestions about our Privacy Policy, please do not hesitate to contact us at <a target={'_blank'} rel={'noreferrer'} href='mailto:nhutthanh340@gmail.com'>nhutthanh340@gmail.com</a>
         </p>
      </>;
   }

   return (
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
         <Terminal text={PolicyAndPrivacyText()}/>
      </Box>
   )
}