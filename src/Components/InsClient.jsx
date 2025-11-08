
import "../styles.css";
import React, { useState } from "react";

const InsClient = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    genre: "",
    ville: "",
    email: "",
    motdepasse: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulaire Client envoyé !");
  };

  const handleLoginClick = () => {
    alert("Redirection vers la page de connexion Client...");
  };

  return (
    <div className="page page-client">
      <h1 className="titre">Bienvenue dans votre espace Client</h1>
      <div className="carte">
        <img src="/Logo10.jpg" alt="Client" className="logo" />

        <form onSubmit={handleSubmit}>
          <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
          <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} required />

          <div className="genre">
            <label>
              <input type="radio" name="genre" value="Femme" checked={formData.genre === "Femme"} onChange={handleChange} /> Femme
            </label>
            <label>
              <input type="radio" name="genre" value="Homme" checked={formData.genre === "Homme"} onChange={handleChange} /> Homme
            </label>
          </div>

          <input type="text" name="ville" placeholder="Ville" value={formData.ville} onChange={handleChange} />
          <input type="email" name="email" placeholder="Adresse e-mail" value={formData.email} onChange={handleChange} />
          <input type="password" name="motdepasse" placeholder="Mot de passe" value={formData.motdepasse} onChange={handleChange} />

          <button type="submit" className="btn-principal">Se connecter</button>
          <button type="button" onClick={handleLoginClick} className="btn-secondaire">
            Vous avez déjà un compte ?
          </button>
        </form>
      </div>
    </div>
  );
};

export default InsClient;
