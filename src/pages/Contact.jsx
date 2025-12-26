import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="contact-page py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="text-uppercase fw-bold">Contact</h2>
          <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
          <hr className="border-primary border-3 w-25 mx-auto" />
        </div>

        <Row className="bg-white shadow p-4 rounded">
          {/* Formulaire de contact */}
          <Col md={6} className="mb-4">
            <h3 className="border-bottom border-primary pb-2 mb-4">Formulaire de contact</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Votre nom" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Votre adresse email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="tel" placeholder="Votre numéro de téléphone" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Sujet" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={4} placeholder="Votre message" required />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit">Envoyer</Button>
              </div>
            </Form>
          </Col>

          {/* Coordonnées et Google Maps */}
          <Col md={6}>
            <h3 className="border-bottom border-primary pb-2 mb-4">Mes coordonnées</h3>
            <address>
              <i className="bi bi-geo-alt me-2"></i> 40 Rue Laure Diebold, 69009 Lyon, France<br />
              <i className="bi bi-phone me-2"></i> 06 20 30 40 50
            </address>
            
            {/* Intégration Google Maps */}
            <div className="ratio ratio-16x9 mt-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626914594191!2d4.8055281!3d45.7786657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65ed560643%3A0x621535728527a20c!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1680000000000" 
                title="Localisation de John Doe"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;