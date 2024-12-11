import React from 'react';
import Navcdq from '../Component-cdq/Nav-cdq/Navcdq';
import Headercdq from '../Component-cdq/Header-cdq/Headercdq';
import Comitecdq from '../Component-cdq/Comite-cdq/Comitecdq'
import Projetcdq from '../Component-cdq/Projetcdq/Projetcdq';
import Refectionement from '../Component-cdq/Refectionement-cdq/Refectionement';
import Contactcdq from '../Component-cdq/Contact/Contact';
import Footerbascdq from '../Component-cdq/Footer-bas-cdq/footer-cdq'
import Pfooter from '../Component-cdq/Footer-cdq/Footer-cdq1';
import Sensib from '../Component-cdq/Sensib/Sensib';
import Textbas from '../Component-cdq/Text-bas-cdq/Textbas-cdq';
function Cdq() {
  return (
    <div>
     <Navcdq/> 
     <Headercdq/> 
     <Comitecdq/>
     <Projetcdq/>
     <Refectionement/>
     <Sensib/>
     <Textbas/>
     <Contactcdq/>
     <Pfooter/>
     <Footerbascdq/>
    

    </div>
    
  );
}

export default Cdq;
