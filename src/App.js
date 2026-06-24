import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import { HashRouter as Router } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
   return (
      <div>
         <Router>
            <LanguageProvider>
               <BaseLayout />
            </LanguageProvider>
         </Router>
      </div>
   );
}


export default App;

