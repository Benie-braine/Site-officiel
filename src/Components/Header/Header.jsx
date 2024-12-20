import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import de l'icône de flèche
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className='mairie'>
            <div className='mere-search'>
            <div className="search-container">
                <input type="text" placeholder="Rechercher..." className="search-input" />
                <SearchIcon className="search-icon" />
            </div>     
            </div>
            <div className="button-containers">
                <div className="buttons-left">


                <Link to='/Etatcivil'><button className="button">SERVICE ETAT CIVIL<ArrowForwardIcon className="arrow-icon" /></button></Link>
                <Link to='/technique'><button className="button">SERVICE TECHNIQUE<ArrowForwardIcon className="arrow-icon" /></button></Link>
                <Link to='/Servicesocial'> <button className="button">SERVICE SOCIAL<ArrowForwardIcon className="arrow-icon" /></button></Link>


                    <Link to='/urbanisme'><button className="button">URBANISME<ArrowForwardIcon className="arrow-icon" /></button></Link>
                </div>
                <div className="buttons-right">
                    <Link to='/agenda'><button className="button">AGENDA <ArrowForwardIcon className="arrow-icon" /></button></Link>

                    <Link to='/cdq'><button className="button">CHEFS DE QUARTIERS ET CDQ<ArrowForwardIcon className="arrow-icon" /></button></Link>
                    <Link to='/mariage'><button className="button">MARIAGE <ArrowForwardIcon className="arrow-icon" /></button></Link>

                    <Link to='/galerie'><button className="button">GALERIE<ArrowForwardIcon className="arrow-icon" /></button></Link>
                </div>
            </div>
             {/* Ajout du bouton de demande d'audience */}
             <a href="https://calendly.com/safou-christiansergio/30min" target="_blank" rel="noopener noreferrer" className="audience-button">
                 Demande d'audience
             </a>
        </div>
    );
};

export default Header;
