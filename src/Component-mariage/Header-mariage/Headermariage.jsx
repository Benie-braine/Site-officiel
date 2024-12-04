// src/components/Header.js
import React from 'react';
import './Headermariage.css';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

 

function Header() {
  return (
    <header className='bg-mariage'
      style={{
        position: 'relative',
        height: '500px', // Ajustez la hauteur si nécessaire
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
          width: '50%',
          height: '25%',
          transform: 'translate(-50%, -50%)', // Centrage du bouton
          padding: '10px 20px',               // Dimensions du bouton rectangulaire
          backgroundColor: 'white',           
        }}
      >
        <div className='enfant-bleu'><h6 className='h3-enfant-bleus'>Accueil <ArrowRightAltOutlinedIcon/>Mariage</h6></div>
        <h1 className='service-technique'>MARIAGE</h1>
      </div>
    </header>
  );
}

export default Header;
