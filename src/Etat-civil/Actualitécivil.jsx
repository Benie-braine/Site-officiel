import React from 'react';
import './Actualitécivil.css';

const Actualitécivil = () => {
    return (
        <div>
            <div className='mere2'>
            <div className='container2'>
            
            <div className='barret'>
            <div className='tiret1'></div>
            <div className='tiret2'></div>
            </div>
            <div className='sous-titre'>
                <h1>A propos</h1>
            </div>
            <div className='tiret'>
            </div>
            </div>
                    {/* Rectangle blanc avec du texte placé juste sous A PROPOS */}
                    <div className="rectangle-blanc">
                        
                        <ul>
                        Le service de l'État civil est responsable de l'enregistrement et de la gestion des événements majeurs de la vie des citoyens, tels que les naissances, mariages, décès et reconnaissances. <br />
                        Il est divisé en deux sections principales : la Transcription et la Légalisation.
                            <li>La Transcription consiste à inscrire dans les registres d'état civil les événements survenus à l'étranger ou relevant de situations particulières, afin de garantir leur reconnaissance légale .</li>
                            <li>La Légalisation concerne l'authentification des signatures sur des documents publics, afin d'en assurer la validité juridique à l'international.</li>
                        </ul>
                    </div>
                    </div>
                </div>  
          
    
    );
};

export default Actualitécivil;


