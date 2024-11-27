import React from 'react';
import './ContactUrb.css';
import AgendaImage from '../../Images/Agenda.png';
import numeroImage from '../../Images/numero.jpeg';
import CDQImage from '../../Images/CDQ.jpg';
import galerieImage from '../../Images/galerie.jpeg';
import MARIAGEImage from '../../Images/MARIAGE.jpg';

const ContactUrb = () => {
    return (
        <div className="contact-container2">
            
            <div className='container2'>
            
            <div className='barre2'>
            <div className='trait3s2'></div>
            <div className='trait4s2'></div>
                <h1>CONSULTEZ AUSSI</h1>
            </div>
            
            
            </div>
            <div className="cards-container2">
                <div className="card2">
                    <img src={AgendaImage} alt="Agenda" />
                    <h2>Agenda</h2>
                </div>
                <div className="card2">
                    
                    <img src={numeroImage} alt="numero" />
                    <h2>Numeros utiles </h2>
                    
                </div>
                <div className="card2">
                    <img src={galerieImage} alt="galerie" />
                    <h2>Galerie</h2>
                </div>
                <div className="card2">
                    <img src={MARIAGEImage} alt="MARIAGE" />
                    <h2>Mariage</h2>
                </div>
                <div className="card2">
                    <img src={CDQImage} alt="CDQ" />
                    <h2>CDQ</h2>
                </div>
            </div>
        </div>
    );
};

export default ContactUrb;
