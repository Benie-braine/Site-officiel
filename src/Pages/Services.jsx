import React from 'react';
import NosServices from '../ComponentServices/NosServices/NosServices';
import Navbar from '../Components/Navbar/Navbar';
import BackButtonUrb from '../ComponentServices/BackButtonUrb/BackButtonUrb';
import Contact from '../ComponentServices/Contact/Contact';
import Footer from '../ComponentServices/Footer/Footer';
import Footerbas from '../ComponentServices/Footerbas/Footerbas'

function Services() {
    return (
      <div>
        <Navbar/>
        <NosServices/>
        <BackButtonUrb/>
        <Contact/>
        <Footer/>
        <Footerbas/>
      </div>
      
    );
  }
  
  export default Services;
  