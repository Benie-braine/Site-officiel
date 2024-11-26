import React from 'react';
import NavbarReglesUrb from '../ComponentsReglesUrb/NavbarReglesUrb/NavbarReglesUrb';
import TitreRegleUrb from '../ComponentsReglesUrb/TitreRegleUrb/TitreRegleUrb';
import ZoneUrb from '../ComponentsReglesUrb/ZoneUrb/ZoneUrb';
import Servitude from '../ComponentsReglesUrb/Servitude/Servitude';
import ButtonUrb from '../ComponentsReglesUrb/ButtonUrb/ButtonUrb'
import FooterRegles from '../ComponentsReglesUrb/FooterRegles/FooterRegles';
import FooterbasRegles from '../ComponentsReglesUrb/FooterbasRegles/FooterbasRegles';

function ReglesUrb() {
    return (
      <div>
       <NavbarReglesUrb/>  
       <TitreRegleUrb/>
       <ZoneUrb/>
       <Servitude/>
       <ButtonUrb/>
       <FooterRegles/>
       <FooterbasRegles/>
      </div>
      
    );
  }
  
  export default ReglesUrb;
  