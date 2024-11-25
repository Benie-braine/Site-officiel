import React from 'react';

import Navbar from '../Components/Navbar/Navbar';
import Headerleg from '../Légalisation/Headerleg';
import Cartes from '../Légalisation/Cartes';
import Info from '../Légalisation/info';
// import Actualitécivil from '../Etat-civil/Actualitécivil';
// import Contact from '../Components/Contact/Contact';
// import Footer from '../Components/Footer/Footer';
// import Footerbas from '../Components/Footerbas/Footerbas'
// import Contact from '../Components/Contact/Contact';
// import Footer from '../Components/Footer/Footer';
// import Footerbas from '../Components/Footerbas/Footerbas';

function Légalisation() {
  return (
    <>
      <Navbar />  
      <Headerleg/>
      <Cartes/>
      <Info/>
    </>
  );
}

export default Légalisation;