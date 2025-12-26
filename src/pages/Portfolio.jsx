import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Portfolio = () => {
  // Liste des 6 projets pour le portfolio
  const projects = [
  { title: "Fresh Food", text: "...", img: "/portfolio/fresh-food.jpg" },
  { title: "Restaurant Akira", text: "...", img: "/portfolio/restaurant-akira.jpg" },
  { title: "Espace bien-être", text: "...", img: "/portfolio/espace-bien-etre.jpg" },
  { title: "SEO", text: "...", img: "/portfolio/seo.jpg" },
  { title: "Création d'une API", text: "...", img: "/portfolio/api.jpg" },
  { title: "Maquette d'un site", text: "...", img: "/portfolio/maquette.jpg" },
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
    // md={4} = 3 colonnes sur PC | xs={12} = 1 colonne sur mobile
    <Col xs={12} md={4} key={index} className="mb-4">
      <Card className="h-100 shadow-sm">
        <Card.Img variant="top" src={project.img} alt={project.title} />
        <Card.Body className="text-center d-flex flex-column">
          <Card.Title className="fw-bold">{project.title}</Card.Title>
          <Card.Text>{project.text}</Card.Text>
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