import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './accueil-page/accueil';
import Inscription from './accueil-page/inscription';
import Connexion from './accueil-page/connexion';
import Produit from './produits-page/produits-page/produits-page.js';
import Details from './produits-page/details/details.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/produits-page" element={<Produit />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
