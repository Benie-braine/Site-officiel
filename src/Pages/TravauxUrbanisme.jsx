import React from 'react';
import NavbarTravauxUrb from '../ComponentsTravauxUrb/NavbarTravauxUrb/NavbarTravauxUrb';
import HeaderTravauxUrb from '../ComponentsTravauxUrb/HeaderTravauxUrb/HeaderTravauxUrb';
import TitreTravauxUrb from '../ComponentsTravauxUrb/TitreTravauxUrb/TitreTravauxUrb';
import TitreEncours from '../ComponentsTravauxUrb/TitreEncours/TitreEncours';
import TitreAvenir from '../ComponentsTravauxUrb/TitreAvenir/TitreAvenir';
import Boutonturb from '../ComponentsTravauxUrb/Boutonturb/Boutonturb';
import FooterTravauxUrb from '../ComponentsTravauxUrb/FooterTravauxUrb/FooterTravauxUrb';
import FooterbasTravauxUrb from '../ComponentsTravauxUrb/FooterbasTravauxUrb/FooterbasTravauxUrb';

function TravauxUrbanisme() {
    return (
      <div>

       <NavbarTravauxUrb/>  
       <HeaderTravauxUrb/>
       <TitreTravauxUrb/>
       <TitreEncours/>
       <TitreAvenir/>
       <Boutonturb/>
       <FooterTravauxUrb/>
       <FooterbasTravauxUrb/>

      </div>
      
    );
  }
  
  export default TravauxUrbanisme;
  