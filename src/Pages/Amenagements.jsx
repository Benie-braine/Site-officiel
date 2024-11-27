import React from 'react';
import NavbarAme from '../ComponentsAmenagements/NavbarAme/NavbarAme';
import Amenagementstitre from '../ComponentsAmenagements/Amenagementstitre/Amenagementstitre';
import ActualitesAme from '../ComponentsAmenagements/ActualitesAme/ActualitesAme';
import TousAme from '../ComponentsAmenagements/TousAme/TousAme';
import ButtonAme from '../ComponentsAmenagements/ButtonAme/ButtonAme';
import FooterAme from '../ComponentsAmenagements/FooterAme/FooterAme';
import FooterbasAme from '../ComponentsAmenagements/FooterbasAme/FooterbasAme';

function Amenagements() {
    return (
      <div>
       <NavbarAme/>  
       <Amenagementstitre/>
       <ActualitesAme/>
       <TousAme/>
       <ButtonAme/>
       <FooterAme/>
       <FooterbasAme/>
      </div>
      
    );
  }
  
  export default Amenagements;
  