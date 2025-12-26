import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col, ProgressBar, Modal } from 'react-bootstrap';

const Home = () => {
  // Gestion de la popup (Modal)
  const [showGithub, setShowGithub] = useState(false);
  const [user, setUser] = useState(null);

  const handleClose = () => setShowGithub(false);
  const handleShow = () => setShowGithub(true);

  // Récupération des données GitHub au chargement
  useEffect(() => {
    fetch('https://api.github.com/users/github-john-doe') 
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error("Erreur API GitHub:", err));
  }, []);

  return (
    <div className="home">
      {/* SECTION BANNIÈRE */}
      <div 
        className="hero-section text-white d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          marginTop: '-70px'
        }}
      >
        <Container>
          <h1 className="display-1 fw-bold">Bonjour, je suis John Doe</h1>
          <h2 className="display-4 mb-4">Développeur web full stack</h2>
          <Button href="#about" variant="primary" size="lg">En savoir plus</Button>
        </Container>
      </div>

      {/* SECTION À PROPOS ET COMPÉTENCES */}
      <section id="about" className="py-5 my-5">
        <Container className="shadow p-5 rounded bg-white">
          <Row>
            <Col md={6} className="mb-4">
              <h3 className="border-bottom border-primary border-3 pb-2 mb-4">À propos</h3>
              <img 
                src="john-doe.jpg" 
                alt="John Doe" 
                className="img-fluid mb-4" 
                style={{ width: '100%', height: 'auto' }} 
              />
              <div className="about-text">
                <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation de <strong>développeur-web</strong> au CEF.</p>
                <p>Durant cette formation, j'ai pu acquérir des compétences solides en Front-end et Back-end.</p>
                
                {/* BOUTON POUR LA POPUP GITHUB */}
                <Button variant="primary" onClick={handleShow} className="mt-3">
                  Voir mon profil GitHub
                </Button>
              </div>
            </Col>

            <Col md={6}>
              <h3 className="border-bottom border-primary border-3 pb-2 mb-4">Mes compétences</h3>
              <div className="mt-4">
                <p className="mb-1">HTML5 90%</p>
                <ProgressBar variant="danger" now={90} className="mb-3" />
                <p className="mb-1">CSS3 80%</p>
                <ProgressBar variant="info" now={80} className="mb-3" />
                <p className="mb-1">JAVASCRIPT 70%</p>
                <ProgressBar variant="warning" now={70} className="mb-3" />
                <p className="mb-1">PHP 60%</p>
                <ProgressBar variant="success" now={60} className="mb-3" />
                <p className="mb-1">REACT 50%</p>
                <ProgressBar now={50} className="mb-3" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FENÊTRE MODALE (POPUP) GITHUB */}
      <Modal show={showGithub} onHide={handleClose} centered>
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>Mon Profil GitHub</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {user ? (
            <>
              <img 
                src={user.avatar_url} 
                alt={user.name} 
                className="rounded-circle mb-3 shadow" 
                style={{ width: '150px' }} 
              />
              <h3>{user.name || user.login}</h3>
              <p className="text-muted">{user.bio || "Développeur Full Stack passionné."}</p>
              <hr />
              <div className="d-flex justify-content-around">
                <div><strong>{user.public_repos}</strong> <br/> Repos</div>
                <div><strong>{user.followers}</strong> <br/> Abonnés</div>
                <div><strong>{user.following}</strong> <br/> Abonnements</div>
              </div>
            </>
          ) : (
            <p>Chargement des données...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Fermer</Button>
          <a href={user?.html_url} target="_blank" rel="noreferrer" className="btn btn-primary">
            Visiter le profil
          </a>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;