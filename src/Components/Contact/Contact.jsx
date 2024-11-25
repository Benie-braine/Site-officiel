import React from 'react';
import './Contact.css';
import AgendaImage from '../../Images/Agenda.png';
import numeroImage from '../../Images/numero.jpeg';
import CDQImage from '../../Images/CDQ.jpg';
import galerieImage from '../../Images/galerie.jpeg';
import MARIAGEImage from '../../Images/MARIAGE.jpg';

const Contact = () => {
    return (
        <div className="contact-container">
            
            <div className='container1'>
            
            <div className='barre'>
            <div className='trait3s'></div>
            <div className='trait4s'></div>
                <h1>CONSULTEZ AUSSI</h1>
            </div>
            
            
            </div>
            <div className="cards1-container">
                <div className="card1">
                    <img src={AgendaImage} alt="Agenda" />
                    <h2>Agenda</h2>
                </div>
                <div className="card1">
                    
                    <img src={numeroImage} alt="numero" />
                    <h2>Numeros utiles </h2>
                    
                </div>
                <div className="card1">
                    <img src={galerieImage} alt="galerie" />
                    <h2>Galerie</h2>
                </div>
                <div className="card1">
                    <img src={MARIAGEImage} alt="MARIAGE" />
                    <h2>Mariage</h2>
                </div>
                <div className="card1">
                    <img src={CDQImage} alt="CDQ" />
                    <h2>CDQ</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;
