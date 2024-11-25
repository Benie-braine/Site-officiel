import React from 'react';
import NavbarReglesUrb from '../ComponentsReglesUrb/NavbarReglesUrb/NavbarReglesUrb';
import TitreRegleUrb from '../ComponentsReglesUrb/TitreRegleUrb/TitreRegleUrb';
import ZoneUrb from '../ComponentsReglesUrb/ZoneUrb/ZoneUrb';
import Servitude from '../ComponentsReglesUrb/Servitude/Servitude';


function ReglesUrb() {
    return (
      <div>
       <NavbarReglesUrb/>  
       <TitreRegleUrb/>
       <ZoneUrb/>
       <Servitude/>
      </div>
      
    );
  }
  
  export default ReglesUrb;
  