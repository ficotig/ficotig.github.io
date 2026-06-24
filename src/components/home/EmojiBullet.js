import React from 'react';
import { Box } from "@mui/material";

const bulletStyle = {
   display: 'flex',
   alignItems: 'flex-start',
   gap: '0.75rem',
   fontSize: '1rem',
   lineHeight: '1.55',
   padding: '0.35rem 0',
   borderRadius: '8px',
   transition: 'all 250ms ease',
   textDecoration: 'none',
};

function EmojiBullet({ link, emoji, text }) {
   const isEnvelope = emoji === "✉️";
   const emojiSpan = (
      <Box
         component={'span'}
         aria-hidden="true"
         fontSize={'1.3rem'}
         flexShrink={0}
         mt={'0.05rem'}
         display={'inline-flex'}
         alignItems={'center'}
      >
         {isEnvelope ? <i className="fa-solid fa-envelope" style={{ color: '#8D53FF', fontSize: '1.2rem', marginRight: '0.15rem' }} /> : emoji}
      </Box>
   );

   if (link) {
      return (
         <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...bulletStyle, color: 'inherit' }}
         >
            {emojiSpan}
            <span>{text}</span>
         </a>
      );
   }

   return (
      <p style={{ ...bulletStyle, cursor: 'default' }}>
         {emojiSpan}
         <span>{text}</span>
      </p>
   );
}

export default EmojiBullet;