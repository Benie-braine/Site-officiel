import React from 'react';
import './ButtonAme.css';

const ButtonAme = () => {
  return (
    <div className="button-container">
      <button className="btn previous-btn">
        <span className="arrow-left">&#8592;</span> Page Précédente
      </button>

      <button className="btns home-btn">

        Retour à l'accueil
      </button>
    </div>
  );
};

export default ButtonAme;
