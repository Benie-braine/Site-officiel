import React from 'react';
import Navbar from '../Components/Navbar/Navbar'
import Cdqheadergal from '../Cdqgalerie/Cdqheadergal/Cdqheadergal';
import Textephotos0 from '../Galerietecnic/Textephotos/Textephotos0';
import Cartescdq from '../Cdqgalerie/Cartescdq/Cartescdq';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Components/Footerbas/Footerbas';
import Voirplus from '../Galerietecnic/Voirplus/Voirplus';
import Boutonretour2 from '../Galerietecnic/Boutonretour2/Boutonretour2';
function Cdqgalerie() {
  return (
    <div>
      <Navbar/>
      <Cdqheadergal/>
      <Textephotos0/>
      <Cartescdq/> 
      <Voirplus/>
      <Boutonretour2/>
      <Contact/>
      <Footer/>
      <Footerbas/>
      
     
      
    </div>
  );
}

export default Cdqgalerie;
