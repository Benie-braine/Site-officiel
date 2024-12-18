import React from 'react';
import Aproposde from '../ComponentApropos/Aproposde/Aproposde';
import Navbar from '../ComponentApropos/Navbar/Navbar';
import BackButtonUrb from '../ComponentApropos/BackButtonUrb/BackButtonUrb';
import Contact from '../ComponentApropos/Contact/Contact';
import Footer from '../ComponentApropos/Footer/Footer';
import Footerbas from '../ComponentApropos/Footerbas/Footerbas';

function Apropos() {
    return (
      <div>
        <Navbar/>
        <Aproposde/>
        <BackButtonUrb/>
        <Contact/>
        <Footer/>
        <Footerbas/>
      </div>
      
    );
  }
  
  export default Apropos;
  