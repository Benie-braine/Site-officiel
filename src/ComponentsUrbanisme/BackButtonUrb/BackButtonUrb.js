import React from 'react';
import './BackButtonUrb.css'; // Importation des styles pour le bouton


const BackButtonUrb = () => {
    return (
        <button className="back-button" onClick={() => window.history.back()}>
            Retour à la page d'accueil
        </button>
    );
};

export default BackButtonUrb;
