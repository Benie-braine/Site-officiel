import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 1000 }}>
      <CardMedia
        sx={{ height: 440 }}
        image="/src/Images/actes de Naissances ..............jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        LEGALISATION : ACTE DE NAISSANCE 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Vous avez un acte de naissance à légaliser ? <br />
          Suivez ces étapes simples pour  une procédure rapide à la Mairie du 2e 
         Arrondissement 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Voir plus</Button>
      </CardActions>
    </Card>
  );
}
