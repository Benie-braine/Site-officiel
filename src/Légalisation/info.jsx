import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import image from '../Images/actes de Naissances ..............jpg'; // Adjust the image filename if necessary

function GridExample() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Text>
                LEGALISATION : ACTE DE NAISSANCE
                <br />
                Vous avez un acte de naissance à légaliser ?
                <br />
                Suivez ces étapes simples pour une procédure rapide à la Mairie du 2e Arrondissement.
                <br />
                En savoir plus...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;