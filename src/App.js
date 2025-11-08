import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




import Connexion from './connexion/connexion.js';
import Produit from './produits-page/produits-page/produits-page.js';
import Propos from './propos/propos';
import HomePage from './Components/HomePage';
import Contact from './contact/contact';
import NegafaProfile from './Components/NegafaProfile.jsx';

import CaftanDetails from './Components/CaftanDetails.jsx';
import InsLivreur from './Components/InsLivreur.jsx';
import InsLoueur from './Components/InsLoueur.jsx';
import InsClient from './Components/InsClient.jsx';

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
        <Route path="/InsLivreur" element={<InsLivreur />} />
        <Route path="/InsLoueur" element={<InsLoueur />} />
        <Route path="/InsClient" element={<InsClient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
