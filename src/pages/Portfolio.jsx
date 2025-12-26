import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Portfolio = () => {
  // Liste des 6 projets pour le portfolio
  const projects = [
    { title: "Fresh Food", text: "Création d'un site de restauration en ligne.", img: "portfolio/fresh-food.jpg" },
    { title: "Restaurant Akira", text: "Création d'un site vitrine.", img: "portfolio/restaurant-akira.jpg" },
    { title: "Espace bien-être", text: "Création d'un site vitrine pour un centre de bien-être.", img: "portfolio/espace-bien-etre.jpg" },
    { title: "SEO", text: "Optimisation du référencement d'un site existant.", img: "portfolio/seo.jpg" },
    { title: "Création d'une API", text: "Création d'une API REST-FULL PHP et MySQL.", img: "portfolio/api.jpg" },
    { title: "Maquette d'un site", text: "Création d'une maquette avec Figma.", img: "portfolio/maquette.jpg" },
  ];

  return (
    <div className="portfolio-page py-5">
      <div className="text-center mb-5">
        <h2 className="text-uppercase fw-bold">Portfolio</h2>
        <p>Voici quelques-unes de mes réalisations.</p>
        <hr className="border-primary border-3 w-25 mx-auto" />
      </div>

      <Container>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={project.img} alt={project.title} />
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{project.title}</Card.Title>
                  <Card.Text>{project.text}</Card.Text>
                  {/* Bouton modifié : fond bleu (primary), texte blanc, libellé "Voir le site" */}
                  <Button variant="primary" className="mt-auto">Voir le site</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;