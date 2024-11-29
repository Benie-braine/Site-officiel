import React from 'react';
import './Text-etrangers.css';

const Textes = ({ children }) => {
  return (

    <div className='boss-text3'>
    <h2 className='enfant-text2'>  <div className='trait-court2'></div>POUR LES ETRANGERS<div className='trait-long2'></div> </h2> 
    <div className='texte-etranger'>
      <strong>
    –Copie intégrale de l’acte de naissance de moins de 6 mois avant la célébration du mariage.
    <br />
    –Les actes originaux doivent être légalisés par le Consulat ou l’Ambassade et accompagnés de leur traduction faite par un traducteur assermenté.
    <br />
    –Certificat de coutume de moins de 6 mois délivré par le Ministère ou Consulat accompagné de sa traduction .
    <br />
    –Certificat de capacité matrimoniale délivré par le Consulat accompagné de sa traduction .
    </strong>
    </div>

   </div>
   
  );
};

export default Textes;
