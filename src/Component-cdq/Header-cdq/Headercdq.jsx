import React from 'react';
import './Headercdq.css';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

function Header() {
  return (
    <header className='cdq-header'
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
      <div className='flottant-cdq'
        variant="contained"
        color= '#1B3D71;'
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '30%',
          height: '25%',
          transform: 'translate(-50%, -50%)', // Centrage du bouton
          padding: '10px 20px',               // Dimensions du bouton rectangulaire
          backgroundColor: 'white', 
        }}
      >
        <div className='cdq-grandchild-blue'><h6 className='cdq-grandchild-blue-text'>Accueil <ArrowRightAltOutlinedIcon/>CDQ</h6></div>
        <h1 className='cdq-grandchild'>CDQ</h1>
      </div>
    </header>
  );
}

export default Header;