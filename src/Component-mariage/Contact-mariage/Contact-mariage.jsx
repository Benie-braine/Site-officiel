import React from 'react';
import './Contact-mariage.css';
import AgendaImage from '../../Images/Agenda.png';
import caniveauImage from '../../Images/caniveau.jpg'
import pontImage from '../../Images/pont.jpg'

const Contact = () => {
    return (
        <div className="contact-container">
            
            <div className='container'>
            
            <div className='barre'>
            <div className='trait3'></div>
            <div className='trait4'></div>
            </div>
            <div className='titre'>
                <h1>Consultez</h1>
            </div>
            <div className='ligne5'>
            </div>
            </div>
            <div className="cards-container">
                <div className="card">
                    <img src={AgendaImage} alt="Agenda" />
                    <h2>Agenda</h2>
                </div>
                <div className="card">
                    
                    <img src={caniveauImage} alt="caniveau" />
                    <h2>Numeros utiles </h2>
                    
                </div>
                <div className="card">
                    <img src={pontImage} alt="pont" />
                    <h2>Gallerie</h2>
                </div>
                <div className="card">
                    <img src={pontImage} alt="pont" />
                    <h2>Mariage</h2>
                </div>
                <div className="card">
                    <img src={pontImage} alt="pont" />
                    <h2>CDQ</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;
