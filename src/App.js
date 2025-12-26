import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

// On crée des petits composants temporaires pour ne pas avoir d'erreurs
const Home = () => <div className="container mt-5"><h1>Page d'accueil en construction</h1></div>;
const Services = () => <div className="container mt-5"><h1>Nos Services</h1></div>;
const Portfolio = () => <div className="container mt-5"><h1>Mon Portfolio</h1></div>;
const Contact = () => <div className="container mt-5"><h1>Contactez-moi</h1></div>;
const Legal = () => <div className="container mt-5"><h1>Mentions Légales</h1></div>;

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;