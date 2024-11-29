import React from 'react';
import './Archives.css';
import ChevronLefttIcon from '@mui/icons-material/ChevronLeft';


function Photos() {
  return (

    <div className='archive-mother'>
    <div className='box-boss'>

   <div className='archives-box'>
    <h2 className='archives-enfants'>ARCHIVES</h2>
     <img
            className="archive"
            src={require('../../Images/Mariages1.jpg')} 
            alt="Second slide"
          />
           <img
            className="archive"
            src={require('../../Images/Mariages1.jpg')} 
            alt="Second slide"
          />
      </div>

<div className='archives-enfant2'>
<img
            className="archive2"
            src={require('../../Images/Mariage3.jpg')} 
            alt="Second slide"
          />
<img
            className="archive2"
            src={require('../../Images/Mariage3.jpg')} 
            alt="Second slide"
          />
   </div>
   </div>

   <div className='buton'><button className='corp-buton' type="button">
    <h7> <ChevronLefttIcon/>page-precedente</h7></button>
    </div>

   </div>
  );
}

export default Photos;
