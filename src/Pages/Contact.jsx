import React from 'react';
import Navbar from '../ComponentContacte/Navbar/Navbar';
import BackButtonUrb from '../ComponentApropos/BackButtonUrb/BackButtonUrb';
import Contacte from '../ComponentContacte/Contacte/Contacte';
import Footer from '../ComponentApropos/Footer/Footer';
import Footerbas from '../ComponentApropos/Footerbas/Footerbas';

function Contact() {
    return (
      <div>
        <Navbar/>
        <Contacte/>
        <BackButtonUrb/>
        <Footer/>
        <Footerbas/>
      </div>
      
    );
  }
  
  export default Contact;
  