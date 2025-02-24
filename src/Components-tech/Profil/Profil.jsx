import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './Profil.css'

const Profil = () => {
  return (
    <div className='profil-boss'
      style={{
        display: 'flex',
        justifyContent: 'space-between',   // Espace égal entre les Paper
        alignItems: 'center',             // Centre verticalement les Paper
        padding: '20px',
        gap: '15px',                      // Espace entre chaque Paper
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',  // Ombre portée
        borderRadius: '10px',             // Coins arrondis
        backgroundColor: '#ffffff',       // Couleur de fond douce
        width:'80%',
        marginTop:'4%',
        margin:'2.5%',
        marginLeft:'auto',
        marginRight:'auto',
      }}
    >
      {/* Premier Paper */}
      <Paper className='paper1' 
        style={{
          padding: '20px',
          width: '40%',
          textAlign: 'center',
          display: 'flex',
          flexDirection:'column',
          alignItems: 'center',
          overflow:'hidden'
        }}
      >
        <Typography variant="body1" color="textSecondary">
          Assistant technique :
        </Typography>
        <Typography variant="h6" gutterBottom>
          Monsieur Derson Levy
        </Typography>
        <img
          src={require('../../Images/eleve 4.jpg')}
          alt="" />
      </Paper>

      {/* Deuxième Paper */}
      <Paper className='paper2'
        elevation={3} 
        style={{
          padding: '20px',
          width: '40%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',          
          alignItems: 'center',
          overflow:'hidden'
        }}
      >
        <Typography variant="body1" color="textSecondary">
          Assistant technique  :
        </Typography>
        <Typography variant="h6" gutterBottom>
          Madame Fyti Naicka
        </Typography>
        <img
          src={require('../../Images/eleve 2.jpg')}
          alt="" />
      </Paper>
    </div>
  );
};

export default Profil;
