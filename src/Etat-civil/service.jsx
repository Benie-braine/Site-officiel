import React from 'react';
import image1 from '../Images/461868947_547372121132982_42946754266194435_n.jpg';
import image2 from '../Images/actes de Naissances  2..............jpg'; // Remplacez par le bon chemin si nécessaire
import './service.css';

function Service() {
  return (
    <div className="mere1">
      
      <div className="block1">
      <div className='photo'>
          <img src={image1} alt="" />
          </div>
          <div className='legalisation'>
          <button className="service-button">LÉGALISATION</button>
          </div>
      </div>

    
      <div className="block2">
      <div className='photo'>
          <img src={image2} alt="" />
          </div>
          <div className='transcription'>
          <button className="service-button2">TRANSCRIPTION</button>
          </div>
      </div>
    </div>
  );
}

export default Service;