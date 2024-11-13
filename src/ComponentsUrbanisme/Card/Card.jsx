import React from 'react';
import './Card.css'; // Assurez-vous que ce fichier CSS existe également.

const Card = ({ image, title, text }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
        </div>
    );
};

export default Card;
