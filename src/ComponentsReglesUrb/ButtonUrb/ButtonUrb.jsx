import React from 'react';
import './ButtonUrb.css';
<<<<<<< HEAD
import {Link} from 'react-router-dom'
=======
>>>>>>> origin/main

const ButtonUrb = () => {
  return (
    <div className="button-container">
<<<<<<< HEAD
      <Link to='/urbanisme'>
      <button className="btn previous-btn">
        <span className="arrow-left">&#8592;</span> Page Précédente
      </button>
      </Link>
      <Link to='/'>
      <button className="btns home-btn">
        Retour à l'accueil
      </button>
      </Link>
=======
      <button className="btn previous-btn">
        <span className="arrow-left">&#8592;</span> Page Précédente
      </button>
      <button className="btn home-btn">
        Retour à l'accueil
      </button>
>>>>>>> origin/main
    </div>
  );
};

export default ButtonUrb;
