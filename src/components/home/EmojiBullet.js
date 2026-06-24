import React from 'react';
import Style from "./EmojiBullet.module.scss";

function EmojiBullet({ link, emoji, text }) {
   const isEnvelope = emoji === "✉️";
   const emojiSpan = (
      <span className={Style.emoji} aria-hidden="true">
         {isEnvelope ? <i className="fa-solid fa-envelope" style={{ color: '#8D53FF', fontSize: '1.2rem', marginRight: '0.15rem' }} /> : emoji}
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
            <span>{text}</span>
         </a>
      );
   }

   return (
      <div className={Style.bulletRow} style={{ cursor: 'default' }}>
         {emojiSpan}
         <span>{text}</span>
      </div>
   );
}

export default EmojiBullet;