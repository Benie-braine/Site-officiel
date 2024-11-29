import React from 'react';
import Navbar from '../Component-mariage/Nav-mariage/Navbar';
import Headermariage from '../Component-mariage/Header-mariage/Headermariage';
import Textes from '../Component-mariage/Textes-bonasavoir/Textes';
import Texte from '../Component-mariage/Textes-pieces/Texte';
import Textetrangers from '../Component-mariage/Textes-etranger/Text-etrangers';
import Archives from '../Component-mariage/Archives/Archives';
import Reseaux from '../Component-mariage/Reseaux/Reseaux';
import Contactmariage from '../Component-mariage/Contact-mariage/Contact-mariage';
import Footermariage1 from'../Component-mariage/Footer-mariage1/Footer-mariage1';
import Footermariage2 from '../Component-mariage/Footer-mariage2/Footer-mariage2';

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
      <Footermariage1/>
      <Footermariage2/>
    </div>
  );
}

export default Mariage;