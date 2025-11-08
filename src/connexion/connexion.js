import React, { useState } from "react";
import "./connexion.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="/han.png" // ضع هنا صورة الشعار الخاصة بك داخل مجلد public
          alt="DARCHEC Logo"
          className="logo"
        />
        <h1 className="brand-name">DARCHEC</h1>
        <p className="brand-slogan">OCCASIONWEAR RENTALS</p>
      </div>

      <div className="login-box">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-btn">
            Se connecter
          </button>
        </form>
        <button className="forgot-btn">Mot de passe oublié ?</button>
        <button className="create-btn">Créer un nouveau compte</button>
      </div>
    </div>
  );
};

export default LoginPage;