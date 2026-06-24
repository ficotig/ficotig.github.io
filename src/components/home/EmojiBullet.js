import React from 'react';
import Style from "./EmojiBullet.module.scss";

function EmojiBullet({ link, icon, text }) {
   const emojiSpan = (
      <span className={Style.emoji} aria-hidden="true">
         <i className={icon} />
      </span>
   );

   if (link) {
      return (
         <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={Style.bulletRow}
         >
            {emojiSpan}
            <span className={Style.text}>{text}</span>
         </a>
      );
   }

   return (
      <div className={Style.bulletRow} style={{ cursor: 'default' }}>
         {emojiSpan}
         <span className={Style.text}>{text}</span>
      </div>
   );
}

export default EmojiBullet;