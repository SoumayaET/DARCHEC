import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inscription from './inscription/inscription';
import Connexion from './connexion/connexion.js';
import Produit from './produits-page/produits-page/produits-page.js';
import Details from './produits-page/details/details.js';
import Propos from './propos/propos';
import Contact from './contact/contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Produit />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/produits-page" element={<Produit />} />
        <Route path="/details" element={<Details />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
