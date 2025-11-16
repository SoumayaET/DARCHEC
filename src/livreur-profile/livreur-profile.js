import { useState } from 'react';
import './livreur-profile.css';
import data_livreur from '../data/data-livreur';
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export default function LivreurProfile() {
  const [villeSelected, setVilleSelected] = useState('');

  const handleChange = (e) => {
    setVilleSelected(e.target.value);
  };

  const filteredLivreurs = villeSelected
    ? data_livreur.filter((livreur) => livreur.ville === villeSelected)
    : data_livreur;

  return (
    <div className='div-livreur'>
      <div className='title-livreur'>
        <h1>Livreurs</h1>
      </div>

      <select id="btn-ville-livreur" onChange={handleChange}>
        <option value=""> Choisir une ville </option>
        <option value="Casablanca">Casablanca</option>
        <option value="Rabat">Rabat</option>
        <option value="Fès">Fès</option>
        <option value="Tanger">Tanger</option>
        <option value="Guelmim">Guelmim</option>
        <option value="Agadir">Agadir</option>
      </select>

      {filteredLivreurs.map((info) => (
        <div key={info.id} className="card-livreur">
          <div className="image-livreur">
            <img src={info.img} alt={info.nom} />
          </div>
          <section className="div-info-livreur">
            <h4 className='Nom-commercial-livreur'>{info.nom_commercial_livreur}</h4>
            <div className='info-livreur'>
              <h6 className="info">{info.nom}</h6>
              <h6 className="info">{info.ville}</h6>
              <h6 className="info">{info.gmail}</h6>
              <h6 className="info">{info.tel}</h6>
              <div className="reviews-livreur">
                {info.star}{info.star}{info.star}{info.star}
              </div>
              <div id='link-whatsapp'>
                <Link  ><FaWhatsapp /> Whatsapp</Link>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}