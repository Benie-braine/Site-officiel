import React from 'react';
import './Header.css'; // Importe le CSS
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import de l'icône de flèche


function Header() {
  return (
    <div className="header-container">
        <div className="boutton-containerga">
                <div className='butga'>
             <button className="bouttonga">ACCUEIL<ArrowForwardIcon className="arrow-icon" />GALERIE</button>
             <h1>GALERIE</h1> 
            </div>
            </div>
    </div>
  );
}

export default Header;
