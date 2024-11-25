import React from 'react';
import './ButtonUrb.css';

const ButtonUrb = () => {
  return (
    <div className="button-container">
      <button className="btn previous-btn">
        <span className="arrow-left">&#8592;</span> Page Précédente
      </button>
      <button className="btn home-btn">
        Retour à l'accueil
      </button>
    </div>
  );
};

export default ButtonUrb;
