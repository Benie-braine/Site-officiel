import React from 'react';
import './Headerleg.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import de l'icône de flèche

const Headerleg = () => {
    return (
        <div className='main2'>
        
            
            <div className="boutton-container1">
                <div className='butt'>
             <button className="boutton2">ACCUEIL<ArrowForwardIcon className="arrow-icon" />ETAT-CIVIL<ArrowForwardIcon className="arrow-icon" />LÉGALISATION</button>
             <h1>LÉGALISATION</h1> 
            </div>
            </div>
        </div>
    );
};

export default Headerleg;
