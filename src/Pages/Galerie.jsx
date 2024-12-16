import React from 'react';
import Nav from '../Componentgalerie/Navb/Nav';
import Header from '../Componentgalerie/Header/Header';
import Text from '../Componentgalerie/Texte/Text';
import BoutonExample from '../Componentgalerie/Bouton/Bouton';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Footerbas from '../Componentgalerie/Footerbas/Footerbas';



function Galerie() {
    return (
      <div>
      <Nav/>
      <Header/>
      <Text/>
      <BoutonExample/>
      
      < Contact/>
      < Footer/>
      < Footerbas/>
      
      
      </div>
      
    );
  }
  
  export default Galerie;
  