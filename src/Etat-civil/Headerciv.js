import React from 'react';
import './Headerciv.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import de l'icône de flèche

const Headerciv = () => {
    return (
        <div className='main1'>
        
            
            <div className="boutton-container">
                <div className='but'>
             <button className="boutton">ACCUEIL<ArrowForwardIcon className="arrow-icon" />ETAT-CIVIL</button>
             <h1>SERVICE ETAT-CIVIL</h1> 
            </div>
            </div>
        </div>
    );
};

export default Headerciv;
