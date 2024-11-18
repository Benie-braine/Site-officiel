import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Actualites.css';

const Actualites = () => {
    return (
        <div className='mere'>
        <div className='container'>
        <div className='barres'>
            <div className='trait1'></div>
            <div className='trait2'></div>
            </div>
            <div className='titres'>
                <h1>ACTUALITES</h1>
            </div>
            <div className='lignes5'>
            </div>
            </div>
            
            <div className="carousel-container">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../../Images/canal.jpg')}
                            alt="First slide"
                        />
                        <Carousel.Caption>


                            <h3>VISITE DE TERRAIN:CONSTRUCTION DE L'ÉCOLE 𝐇ENRI 𝐂LEMENT </h3>

                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../../Images/elec.jpg')}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>VISITE DE TERRAIN : SECURITE ELECTRIQUE AU 2E ARRONDISSEMENT</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../../Images/caniveau.jpg')}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>NETTOYAGE DES CANIVEAUX AU QUARTIER CHIC </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
    </div>
    
    );
};

export default Actualites;
