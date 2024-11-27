import React from 'react';
import NavbarAutorisationsUrb from '../ComponentsAutorisationsUrb/NavbarAutorisationsUrb/NavbarAutorisationsUrb';
import AutorisationsUrb from '../ComponentsAutorisationsUrb/AutorisationsUrb/AutorisationsUrb';
import TypeAutorisations from '../ComponentsAutorisationsUrb/TypeAutorisations/TypeAutorisations';
import Procedureasuivre from '../ComponentsAutorisationsUrb/Proceduresasuivre/Procedureasuivre';
import ReglesRegulation from '../ComponentsAutorisationsUrb/ReglesRegulation/ReglesRegulation';
import ConsultationDossier from '../ComponentsAutorisationsUrb/ConsultationDossier/ConsultationDossier';
import FormulaireTelecharger from '../ComponentsAutorisationsUrb/FormulaireTelecharger/FormulaireTelecharger';
import ButtonAutoU from '../ComponentsAutorisationsUrb/ButtonAutoU/ButtonAutoU';
import FooterAutoU from '../ComponentsAutorisationsUrb/FooterAutoU/FooterAutoU';
import FooterbasAutoU from '../ComponentsAutorisationsUrb/FooterbasAutoU/FooterbasAutoU';



function AutorisationsUrbanisme() {
    return (
      <div>
       <NavbarAutorisationsUrb/>  
       <AutorisationsUrb/>
       <TypeAutorisations/>
       <Procedureasuivre/>
       <ReglesRegulation/>
       <ConsultationDossier/>
       <FormulaireTelecharger/>
       <ButtonAutoU/>
       <FooterAutoU/>
       <FooterbasAutoU/>

      </div>
      
    );
  }
  
  export default AutorisationsUrbanisme;
  