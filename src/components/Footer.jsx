import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-5">
      <Container>
        <Row>
          {/* Colonne 1 : Coordonnées */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold">John Doe</h5>
            <address className="mb-3">
              40 Rue Laure Diebold<br />
              69009 Lyon, France<br />
              Téléphone : 06 20 30 40 50
            </address>
            <div className="d-flex gap-3 fs-3">
              <a href="https://github.com" target="_blank" rel="nofollow" className="text-white text-decoration-none"><i className="bi bi-github"></i></a>
              <a href="https://twitter.com" target="_blank" rel="nofollow" className="text-white text-decoration-none"><i className="bi bi-twitter"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="nofollow" className="text-white text-decoration-none"><i className="bi bi-linkedin"></i></a>
            </div>
          </Col>
{/* Colonne 2 : Liens utiles (Mis à jour) */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">Liens utiles</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/" className="text-decoration-none text-white">Accueil</Link></li>
              <li className="mb-2"><Link to="/services" className="text-decoration-none text-white">Services</Link></li>
              <li className="mb-2"><Link to="/portfolio" className="text-decoration-none text-white">Portfolio</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-decoration-none text-white">Me contacter</Link></li>
              <li className="mb-2"><Link to="/legal" className="text-decoration-none text-white">Mentions légales</Link></li>
            </ul>
          </Col>

          {/* Colonne 3 : Mes dernières réalisations (6 projets) */}
          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/portfolio" className="text-decoration-none text-white">Fresh Food</Link></li>
              <li className="mb-2"><Link to="/portfolio" className="text-decoration-none text-white">Restaurant Akira</Link></li>
              <li className="mb-2"><Link to="/portfolio" className="text-decoration-none text-white">Espace bien-être</Link></li>
              <li className="mb-2"><Link to="/portfolio" className="text-decoration-none text-white">SEO</Link></li>
              <li className="mb-2"><Link to="/portfolio" className="text-decoration-none text-white">Création d'une API</Link></li>
              <li className="mb-2"><Link to="/portfolio" className="text-decoration-none text-white">Maquette d'un site</Link></li>
            </ul>
          </Col>
          
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;