import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
  return (
    <div className="services-page py-5">
      {/* En-tête de la page */}
      <div className="text-center mb-5">
        <h2 className="text-uppercase fw-bold">Mon offre de services</h2>
        <p>Voici les prestations sur lesquelles je peux intervenir.</p>
        <hr className="border-primary border-3 w-25 mx-auto" />
      </div>

      <Container>
        <Row className="g-4">
          {/* Service 1 */}
          <Col md={4}>
            <Card className="h-100 text-center shadow-sm p-3">
              <div className="text-primary mb-3"><i className="bi bi-brush fs-1"></i></div>
              <Card.Body>
                <Card.Title className="text-uppercase">UX Design</Card.Title>
                <Card.Text>L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Service 2 */}
          <Col md={4}>
            <Card className="h-100 text-center shadow-sm p-3">
              <div className="text-primary mb-3"><i className="bi bi-code-slash fs-1"></i></div>
              <Card.Body>
                <Card.Title className="text-uppercase">Développement Web</Card.Title>
                <Card.Text>Le <strong>développement de sites web</strong> repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Service 3 */}
          <Col md={4}>
            <Card className="h-100 text-center shadow-sm p-3">
              <div className="text-primary mb-3"><i className="bi bi-search fs-1"></i></div>
              <Card.Body>
                <Card.Title className="text-uppercase">Référencement</Card.Title>
                <Card.Text>Le <strong>référencement naturel (SEO)</strong> consiste à optimiser un site pour les moteurs de recherche.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;