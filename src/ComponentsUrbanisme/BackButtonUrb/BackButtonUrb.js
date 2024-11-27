import React from 'react';
import './BackButtonUrb.css'; // Importation des styles pour le bouton
<<<<<<< HEAD
import {Link} from 'react-router-dom'

const BackButtonUrb = () => {
    return (
        <Link to='/'>
        <button className="back-button" onClick={() => window.history.back()}>
            Retour à la page d'accueil
        </button>
        </Link>
=======


const BackButtonUrb = () => {
    return (
        <button className="back-button" onClick={() => window.history.back()}>
            Retour à la page d'accueil
        </button>
>>>>>>> origin/main
    );
};

export default BackButtonUrb;
