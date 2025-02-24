// src/components/Header.js
import React from 'react';
import './Headermariage.css';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

 

function Header() {
  return (
    <header className='bg-mariage'
    style={{
      position: 'relative',
      height: '50vh', // Ajustez la hauteur si nécessaire
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      {/* Bouton flottant rectangulaire centré */}
      <div className='flotant'
        variant="contained"
        color= '#1B3D71;'
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '90%',
          height: '25%',
          transform: 'translate(-50%, -50%)', // Centrage du bouton
          padding: '10px 20px',               // Dimensions du bouton rectangulaire
          backgroundColor: 'white',           
        }}
      >
        <button  className='enfant-bleu'>ACCUEIL <ArrowRightAltOutlinedIcon/>MARIAGE</button>
        <h1 className='service-technique'>MARIAGE</h1>
      </div>
    </header>
  );
}

export default Header;
