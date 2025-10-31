import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 10) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  // ✅ نضيف مستمع التمرير داخل useEffect مرة واحدة فقط
  useEffect(() => {
    window.addEventListener('scroll', setFixed);

    // ✅ تنظيف الحدث عند إزالة المكون لتجنب المشاكل
    return () => {
      window.removeEventListener('scroll', setFixed);
    };
  }, []);

  return (
    <header>
      <nav className={fix ? 'navbar fixed' : 'navbar'}>
        <h4 className='logo-name'>DARCHEC</h4>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/produits-page">Produits</Link></li>
          <li><Link to="/a-propos">A propos</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className='btn'><Link to="/inscription">s'inscrire</Link></li>
          <li className='btn'><Link to="/connexion">Connexion</Link></li>
        </ul>
      </nav>
    </header>
  );
}
