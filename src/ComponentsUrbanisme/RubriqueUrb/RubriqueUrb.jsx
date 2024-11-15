import React from 'react';
import './RubriqueUrb.css';
import log from '../../Images/gg_arrow-up-o.png';

const RubriqueUrb = () => {
    return (
        <div className="rubrique">
           <h2>Rubriques</h2>

           <div>
            <button className='travaux'>
           <img src={log} alt="gg_arrow-up-o.png" />
           <h4>Regles d'urbanisme</h4>
           </button>
           <button className='travaux'>
           <img src={log} alt="gg_arrow-up-o.png" />
           <h4>Travaux</h4>
           </button>
           <button className='travaux'>
           <img src={log} alt="gg_arrow-up-o.png" />
           <h4>Travaux</h4>
           </button>
           <button className='travaux'>
           <img src={log} alt="gg_arrow-up-o.png" />
           <h4>Travaux</h4>
           </button>
           </div>
        </div>
    );
}

export default RubriqueUrb;
