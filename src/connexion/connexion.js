import './connexion.css';
import Alert from '../alert/alert';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ استيراد useNavigate
import Header from '../produits-page/header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Contact() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // ✅ إنشاء الدالة

  function handleformenvoyer(event) {
    event.preventDefault();
    setErrorMessage(null);

    const { email, password } = formInput;

    if (!email.endsWith("@gmail.com")) {
      setErrorMessage("Seules les adresses Gmail sont autorisées");
      setShowAlert(true);
      return;
    }

    if (email !== "" && password !== "") {
      navigate("/"); // ✅ الانتقال إلى الصفحة
    }

    setShowAlert(true);
  }

  const btndisablede = formInput.email === "" || formInput.password === "";

  function handleDivclick() {
    if (showAlert) {
      setShowAlert(false);
    }
  }

  return (
    <div className='flex-contact' onClick={handleDivclick} style={{ position: "relative" }}>
      <div style={{ width: "100%", margin: "0px", position: "absolute", top: "0" }}>
        <Header />
      </div>

      <div className="title-connexion">
        <h1>connexion</h1>
      </div>
      <div className="div-connexion">
        <div className="logo-connexion">
          <img src="/images/darchec-logo.jpg" alt="darchec logo" />
        </div>
        <form id="form" className='form-connexion'>
          <input
            value={formInput.email}
            onChange={(event) => {
              setFormInput({ ...formInput, email: event.target.value });
            }}
            type="email"
            placeholder='E-mail'
            className='email-input-connexion'
          />

          <div className='div-btn-connexion'>
            <input
              value={formInput.password}
              onChange={(event) => {
                setFormInput({ ...formInput, password: event.target.value });
              }}
              type={showPassword ? "text" : "password"}
              placeholder='Mot de passe'
              className='password-input-connexion'
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="btn-password"
            >
              {showPassword ? "Cacher" : "Afficher"}
            </button>
          </div>

          <button
            className={btndisablede ? "disabled-contact" : ""}
            disabled={btndisablede}
            onClick={handleformenvoyer}
            id='btn-connexion-contact'
          >
            connexion
          </button>
          <Link className='lien-creer-connexion'>mot de passe oublié</Link>
          <Link className='lien-oublie-connexion' to="/HomePage">créer un nouveau compte</Link>
        </form>
      </div>

      <Alert errorMessage={errorMessage} isVisible={showAlert} />
    </div>
    
  );
}