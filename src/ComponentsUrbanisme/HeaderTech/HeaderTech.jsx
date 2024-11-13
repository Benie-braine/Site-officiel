import React from 'react';
import './HeaderTech.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import de l'icône de flèche


const HeaderTech = () => {
    return (
        <div className='mairies'>
            
               
            
            <div className='urbanisme'>
            <button className="button">ACCUEIL<ArrowForwardIcon className="arrow-icon" />SERVICE URBANISME</button>
            
            <h1> URBANISME </h1>
            </div>
        </div>
    );
};

export default HeaderTech;
