import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Connexion from './connexion/connexion.js';
import Produit from './produits-page/produits-page/produits-page.js';
import Propos from './propos/propos';
import HomePage from './Components/HomePage';
import Contact from './contact/contact';
import NegafaProfile from './Components/NegafaProfile.jsx';

import CaftanDetails from './Components/CaftanDetails.jsx';
import InsLivreur from './Components/insLivreur/insLivreur.js';
import InsLoueur from './Components/insLoueur/insLoueur.js';
import InsClient from './Components/insClient/insClient.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Produit />} />
        
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/produits-page" element={<Produit />} />
        <Route path="/CaftanDetails" element={<CaftanDetails />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/NegafaProfile" element={<NegafaProfile />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/CaftanDetails/:id" element={<CaftanDetails />} />
        <Route path="/insLivreur" element={<InsLivreur />} />
        <Route path="/insLoueur" element={<InsLoueur />} />
        <Route path="/insClient" element={<InsClient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
