import { FiHeart } from 'react-icons/fi';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { TbTruckDelivery } from 'react-icons/tb';
import './nav.css';
import { useState } from 'react';

export default function Nav({ cartCount, panier, setPanier }) {
  const [showPanier, setShowPanier] = useState(false);

  function togglePanier() {
    setShowPanier(!showPanier);
  }

  function supprimerDuPanier(index) {
    const nouveauPanier = [...panier];
    nouveauPanier.splice(index, 1);
    setPanier(nouveauPanier);
  }

  return (
    <nav className='nav-produits-accueil'>
      <div className='nav-container-accueil'>
        <input
          type='text'
          className='search-input-accueil'
          placeholder='Enter your search'
        />
      </div>

      <div className='profile-container-accueil' style={{display:'flex', flexDirection:'row'}}>
        <div style={{ position: 'relative' }}>
          <a href='#' onClick={togglePanier}>
            <FaShoppingCart className='nav-icons-accueil' />
          </a>
          {cartCount > 0 && (
            <span className='count-card'>{cartCount}</span>
          )}
        </div>

        <a href='#'>
          <TbTruckDelivery className='nav-icons-accueil' />
        </a>
        <a href='#'>
          <FaUser className='nav-icons-accueil' />
        </a>
      </div>

      {showPanier && (
        <div className="panier-overlay">
          <div className="panier-modal">
            <h3>Produits dans le panier</h3>
            <div className="panier-cards">
              {panier.map((item, index) => (
                <div key={index} className="panier-card">
                  <img src={item.img} alt={item.title} className="panier-img" />
                  <div className="panier-info">
                    <h4>{item.title}</h4>
                    <p>{item.price}</p>
                    <button onClick={() => supprimerDuPanier(index)} className="btn-supprimer">Supprimer</button>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={togglePanier} className="btn-fermer-panier">Fermer</button>
          </div>
        </div>
      )}
    </nav>
  );
}