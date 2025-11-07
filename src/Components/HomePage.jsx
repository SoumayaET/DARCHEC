import React from "react";
import { Link } from "react-router-dom"; // 🟢 import du Link
import "../styles.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1>Choisissez votre espace pour continuer</h1>

      <div className="cards-container">
        {/* 🟡 CLIENT */}
        <Link to="/insClient" className="card">
          <img src="/Logo10.jpg" alt="Client" className="card-image" />
          <p>je veux louer des tenues</p>
          <h2>Client</h2>
        </Link>

        {/* 🏪 LOUEUR */}
        <Link to="/insLoueur" className="card">
          <img src="/Logo20.jpg" alt="Loueur" className="card-image" />
          <p>je veux proposer mes tenues à la location</p>
          <h2>Loueur</h2>
        </Link>

        {/* 🛵 LIVREUR */}
        <Link to="/insLivreur" className="card">
          <img src="/Logo30.jpg" alt="Livreur" className="card-image" />
          <p>je veux livrer les commandes</p>
          <h2>Livreur</h2>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
