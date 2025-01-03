import React from 'react';
import './FormulaireTelecharger.css';


const FormulaireTelecharger= () => {
    return ( 
        <div className='mereft'>

        <div className='containerAft'>
            
            <div className='barresft'>
            <div className='trait1ft'></div>
            <div className='trait2ft'></div>
            </div>
            <div className='titreft'>
                <h1>FORMULAIRES ET DOCUMENTS A TELECHARGER</h1>
            </div>
            <div className='ligne5ft'>
            </div>
            </div>
            <div className='texteft'>
              
            <p className='ft'> Téléchargez les formulaires nécessaires pour vos demandes d'autorisations :</p>
            <div>
            <a href="file:///C:/Users/user/Downloads/ANUTTC_DG_DOUAF_PiecesDemandePC_29032017_VF%20permis%20de%20construire.pdf.crdownload" target="_blank" rel="noopener noreferrer">
            Formulaire de demande de permis de construire
             </a>           
             </div>
             
            <div>
            <a href="file:///C:/Users/user/Downloads/autorisation%20demande.pdf" target="_blank" rel="noopener noreferrer">
            Formulaire de déclaration préalable de travaux
             </a>
             </div>
            <div>
            <a href="https://calendly.com/safou-christiansergio/30min" target="_blank" rel="noopener noreferrer">
            <button>Formulaire de demande de permis d'aménager</button>
             </a> 
            </div>
            <div className='apresb'>
                <p>
                * A Pour toute question ou assistance dans la préparation de votre dossier, vous pouvez prendre rendez-vous avec le service d'urbanisme via notre plateforme en ligne ou par téléphone. Nos experts sont à votre disposition pour vous aider à
                naviguer dans les démarches administratives liées à vos projets.
                </p>
            </div>

           </div>
           
    </div>
    
    );
};

export default FormulaireTelecharger;
