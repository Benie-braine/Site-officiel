import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import de l'icône de flèche

const Header = () => {
    return (
        <div className='mairie'>
            <div className="search-container">
                <input type="text" placeholder="Rechercher..." className="search-input" />
                <SearchIcon className="search-icon" />
            </div>     

            <div className="button-container">
                <div className="buttons-left">
                    <button className="button">SERVICE ETAT CIVIL<ArrowForwardIcon className="arrow-icon" /></button>
                    <button className="button">SERVICE TECHNIQUE<ArrowForwardIcon className="arrow-icon" /></button>
                    <button className="button">SERVICE SOCIAL<ArrowForwardIcon className="arrow-icon" /></button>
                    <button className="button">URBANISME<ArrowForwardIcon className="arrow-icon" /></button>
                </div>
                <div className="buttons-right">
                    <button className="button">AGENDA <ArrowForwardIcon className="arrow-icon" /></button>
                    <button className="button">CDQ <ArrowForwardIcon className="arrow-icon" /></button>
                    <button className="button">MARIAGE <ArrowForwardIcon className="arrow-icon" /></button>
                    <button className="button">GALLERIE<ArrowForwardIcon className="arrow-icon" /></button>
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
