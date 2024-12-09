import React from 'react';
import './Textepieces.css';

const Texts = ({ children }) => {
  return (

    <div className='boss-text3'>
    <h2 className='enfant-text3'><div className='trait-court3'></div> PIECES A FOURNIRS<div className='traitt-long3'></div> </h2> 
    <div className='texte-pieces3'>
      <strong>
    –Un extrait de naissance avec filiation de moins de 3 mois au jour du mariage
    <br />
    –Attestation de domicile souscrite sur l’honneur
    <br />
    –Justificatif de domicile au nom des deux futurs époux (quittance de loyer, quittance de gaz, d’électricité, de téléphone) récents.
    <br />
    –Liste des témoins majeurs (copie de leurs pièces d’identité) – Obligation au minimum d’un témoin par futur époux.
    <br />
    –Présentation d’une pièce d’identité.
    <br />
    –Attestation du notaire dans si un contrat de mariage a été établi
    <br />
    –Livret de famille si enfants en commun
    </strong>
    </div>

    </div>
   
  );
};

export default Texts;