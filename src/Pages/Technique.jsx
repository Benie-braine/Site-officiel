import React from 'react';
import Navbartech from '../Components-tech/Nav/Navbartech';
import Header from '../Components-tech/Header/Headertech';
import Text from '../Components-tech/Text/Text';
import Profil from '../Components-tech/Profil/Profil';
import Traveaux from '../Components-tech/Traveaux/traveaux';
import Contacttech from '../Components-tech/Contact/Contacttech';
import Footertech from '../Components-tech/Footertech/Footertech';
import Footertechbas from '../Components-tech/Footerbas/Footertechbas';

function Technique() {

  return (
    <div>
      <Navbartech />
      <Header/>
      <Text/>
      <Profil/>
      <Traveaux/>
      <Contacttech/>
      <Footertech/>
      <Footertechbas/>
    </div>
  );
}

export default Technique;