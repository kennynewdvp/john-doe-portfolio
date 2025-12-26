import React from 'react';
import { Container, Accordion } from 'react-bootstrap';

const Legal = () => {
  return (
    <div className="legal-page py-5">
      <div className="text-center mb-5">
        <h2 className="text-uppercase fw-bold">Mentions Légales</h2>
        <hr className="border-primary border-3 w-25 mx-auto" />
      </div>

      <Container className="bg-white p-3 rounded shadow-sm">
        <Accordion defaultActiveKey="0">
          {/* Section 1 : Éditeur du site */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Éditeur du site</Accordion.Header>
            <Accordion.Body>
              <h3>John Doe</h3>
              <p><i className="bi bi-geo-alt me-2"></i> 40 Rue Laure Diebold, 69009 Lyon, France</p>
              <p><i className="bi bi-phone me-2"></i> 06 20 30 40 50</p>
              <p><i className="bi bi-envelope me-2"></i> john.doe@gmail.com</p>
            </Accordion.Body>
          </Accordion.Item>

          {/* Section 2 : Hébergeur */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body>
              <h3>Always Data</h3>
              <p>91 rue du Faubourg Saint Honoré</p>
              <p>75008 Paris</p>
              <p><a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">www.alwaysdata.com</a></p>
            </Accordion.Body>
          </Accordion.Item>

          {/* Section 3 : Crédits */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body>
              <h3>Crédits</h3>
              <p>Site développé par John Doe, étudiant au CEF.</p>
              <p>Les images libres de droit sont issues du site Pixabay.</p>
              {/* Ligne de crédit pour l'icône ajoutée ici */}
              <p>L'icône du site (favicon) a été téléchargée sur le site <a href="https://www.flaticon.com/fr/" target="_blank" rel="nofollow">Flaticon</a>.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default Legal;