import React from 'react';
import Navbar from '../Component-mariage/Navbar/Navbar';
import Headermariage from '../Component-mariage/Header-mariage/Headermariage';
import Textes from '../Component-mariage/Textes-bonasavoir/Textes';
import Texte from '../Component-mariage/Textes-pieces/Texte';
import Textetrangers from '../Component-mariage/Textes-etranger/Text-etrangers';
import Archives from '../Component-mariage/Archives/Archives';
import Reseaux from '../Component-mariage/Reseaux/Reseaux';
import Contactmariage from '../Component-mariage/Contact-mariage/Contact-mariage';
import Footer from'../Component-mariage/Footer/Footer';
import Footerbas from '../Component-mariage/Footerbas/Footerbas';

function Mariage() {

  return (
    <div>
      <Navbar/>
      <Headermariage/>
      <Textes/>
      <Texte/>
      <Textetrangers/>
      <Archives/>
      <Reseaux/>
      <Contactmariage/>
      <Footer/>
      <Footerbas/>
    </div>
  );
}

export default Mariage;