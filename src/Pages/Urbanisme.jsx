import React from 'react';
import NavbarUrb from '../ComponentsUrbanisme/NavbarUrb/NavbarUrb';
import HeaderUrb from '../ComponentsUrbanisme/HeaderUrb/HeaderUrb';
import AproposUrb from '../ComponentsUrbanisme/AproposUrb/AproposUrb';
import RubriqueUrb from '../ComponentsUrbanisme/RubriqueUrb/RubriqueUrb'
import CarteUrb from '../ComponentsUrbanisme/CarteUrb/CarteUrb';
import BackButtonUrb from '../ComponentsUrbanisme/BackButtonUrb/BackButtonUrb';
import ContactUrb from '../ComponentsUrbanisme/ContactUrb/ContactUrb';
import FooterUrb from '../ComponentsUrbanisme/FooterUrb/FooterUrb';
import FooterbasUrb from '../ComponentsUrbanisme/FooterbasUrb/FooterbasUrb';

function Accueil() {
    return (
      <div>
       <NavbarUrb/>  
       <HeaderUrb/>
       <AproposUrb/>
       <RubriqueUrb/>
       <CarteUrb/>
       <ContactUrb/>
       <BackButtonUrb/>
       <FooterUrb/>
       <FooterbasUrb/>
      </div>
      
    );
  }
  
  export default Accueil;
  