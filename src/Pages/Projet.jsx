import React from 'react';
import Projets from '../ComponentProjets/Projets/Projets';
import Navbar from '../ComponentProjets/Navbar/Navbar';
import BackButtonUrb from '../ComponentProjets/BackButtonUrb/BackButtonUrb';
import Contact from '../ComponentProjets/Contact/Contact';
import Footer from '../ComponentProjets/Footer/Footer';
import Footerbas from '../ComponentProjets/Footerbas/Footerbas'

function Projet() {
    return (
      <div>
        <Navbar/>
        <Projets/>
        <BackButtonUrb/>
        <Contact/>
        <Footer/>
        <Footerbas/>
      </div>
      
    );
  }
  
  export default Projet;
  