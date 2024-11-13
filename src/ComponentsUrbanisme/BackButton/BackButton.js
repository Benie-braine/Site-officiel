import React from 'react';
import './BackButton.css'; // Importation des styles pour le bouton


const BackButton = () => {
    return (
        <button className="back-button" onClick={() => window.history.back()}>
            Retour à la page d'accueil
        </button>
    );
};

export default BackButton;
