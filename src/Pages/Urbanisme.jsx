import React from 'react';
import Navbar from '.././ComponentsUrbanisme/Navar/Navbar';
import Header from '../ComponentsUrbanisme/HeaderTech/HeaderTech';
import Apropos from '../ComponentsUrbanisme/Apropos/Apropos';
import Carte from '../ComponentsUrbanisme/Carte/Carte';
import Contact from '../ComponentsUrbanisme/Contact/Contact';
import Footer from '../ComponentsUrbanisme/Footer/Footer';
import Footerbas from '../ComponentsUrbanisme/Footerbas/Footerbas';
import BackButton from '../ComponentsUrbanisme/BackButton/BackButton'

function Urbanisme() {

    return (
        <div>
            <Navbar/>
            <Header/>
            <Apropos/>
            <Carte/>
            <Contact/>
            <BackButton/>
            <Footer/>
            <Footerbas/>
        </div>
    );
    
}

export default Urbanisme;