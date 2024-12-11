import React from 'react';
import './RetourButtonaideso.css'; // Importation des styles pour le bouton


const RetourButtonaide = () => {
    return (
        <button className="Retour-button" onClick={() => window.history.back()}>
            Retour à la page d'accueil
        </button>
    );
};

export default RetourButtonaide;
