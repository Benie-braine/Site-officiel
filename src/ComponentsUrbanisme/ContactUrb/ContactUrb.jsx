import React from 'react';
import './ContactUrb.css';
import AgendaImage from '../../Images/Agenda.png';
import numeroImage from '../../Images/numero.jpeg';
import CDQImage from '../../Images/CDQ.jpg';
import galerieImage from '../../Images/galerie.jpeg';
import MARIAGEImage from '../../Images/MARIAGE.jpg';

const ContactUrb = () => {
    return (
        <div className="contact-container">
            
            <div className='container'>
            
            <div className='barre'>
            <div className='trait3'></div>
            <div className='trait4'></div>
            <div className='titre'>
                <h1>CONSULTEZ AUSSI</h1>
                </div>
            </div>
            
            
            </div>
            <div className="cards-container">
                <div className="card">
                    <img src={AgendaImage} alt="Agenda" />
                    <h2>Agenda</h2>
                </div>
                <div className="card">
                    
                    <img src={numeroImage} alt="numero" />
                    <h2>Numeros utiles </h2>
                    
                </div>
                <div className="card">
                    <img src={galerieImage} alt="galerie" />
                    <h2>Galerie</h2>
                </div>
                <div className="card">
                    <img src={MARIAGEImage} alt="MARIAGE" />
                    <h2>Mariage</h2>
                </div>
                <div className="card">
                    <img src={CDQImage} alt="CDQ" />
                    <h2>CDQ</h2>
                </div>
            </div>
        </div>
    );
};

export default ContactUrb;
