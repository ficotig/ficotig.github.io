import React from 'react';
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import {Box} from "@mui/material";

const iconClass = "fa fa-circle";

function Terminal(props) {
   const {text} = props;

   return (
      <Box
         component={'section'}
         className={classNames(Style.terminal, Style.shadowed, Style.terminalEntrance)}
         width={{xs: '88%', md: '55%'}}
         mb={'4rem'}
      >
         {/* Title bar */}
         <div className={Style.titleBar}>
            <i className={classNames(iconClass, Style.red)} />
            <i className={classNames(iconClass, Style.amber)} />
            <i className={classNames(iconClass, Style.green)} />
         </div>

         {/* Terminal body */}
         <div className={Style.body}>
            {text}
            <span className={Style.cursor} aria-hidden="true" />
         </div>
      </Box>
   );
}

export default Terminal;