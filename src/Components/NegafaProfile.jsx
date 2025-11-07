import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaQuestionCircle } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import "../styles.css";

export default function NegafaProfile() {
  // Images from public folder
 const images = [
  process.env.PUBLIC_URL + "/Logo111.jpg",
  process.env.PUBLIC_URL + "/Logo222.jpg",
  process.env.PUBLIC_URL + "/Logo000.jpg",
  process.env.PUBLIC_URL + "/Logo444.jpg",
  process.env.PUBLIC_URL + "/Logo555.jpg",
  process.env.PUBLIC_URL + "/Logo666.jpg",
  process.env.PUBLIC_URL + "/Logo777.jpg",
  process.env.PUBLIC_URL +"/Logo888.jpg",
  process.env.PUBLIC_URL + "/Logo999.jpg",
];

  const caftans = [
  { id: 1, name: "Sac Marron Serpent", price: "350 DH", rating: "★★★★☆", desc: "Texture serpent, fermoir métallique", img: "/Logo111.jpg" },
  { id: 2, name: "Caftan Royal Bleu Perlé", price: "350 DH", rating: "★★★★☆", desc: "Perles, Broderie", img: "/Logo222.jpg" },
  { id: 3, name: "Sac Beige", price: "350 DH", rating: "★★★★☆", desc: "Texture lisse, fermoir métallique", img: "/Logo000.jpg" },
  { id: 4, name: "Veste Homme Gris", price: "500 DH", rating: "★★★★☆", desc: "Coupe classique, boutons métalliques", img: "/Logo444.jpg" },
  { id: 5, name: "Caftan Rouge Royal", price: "1250 DH", rating: "★★★★★", desc: "Broderie dorée, perles décoratives", img: "/Logo555.jpg" },
  { id: 6, name: "Veste Homme Bleu Clair", price: "480 DH", rating: "★★★★☆", desc: "Coupe moderne, fermeture à boutons", img: "/Logo666.jpg" },
  { id: 7, name: "Sac Blanc Motif Bleu", price: "380 DH", rating: "★★★★☆", desc: "Motif bleu décoratif, fermoir métallique", img: "/Logo777.jpg" },
  { id: 8, name: "Veste Homme Rose Bébé", price: "490 DH", rating: "★★★★☆", desc: "Coupe moderne, fermeture à boutons", img: "/Logo888.jpg" },
  { id: 9, name: "Caftan Noir Élégance", price: "1300 DH", rating: "★★★★☆", desc: "Design sophistiqué avec perles et broderie fine", img: "/Logo999.jpg" },
];


  // Profile picture (first image)
  const profilePic = process.env.PUBLIC_URL + "/Logo000.jpg";

  return (
    <div className="page">
      <aside className="left-bar">
        <div className="icon"><FaHome size={28} /></div>
        <div className="icon"><FaQuestionCircle size={28} /></div>
        <div className="icon"><AiOutlineMessage size={28} /></div>
      </aside>

      <main className="container">
        <header className="title">
          <h1>Negafa Style</h1>
          <div className="title-underline" />
        </header>

        <section className="profile-wrap">
          <div className="profile-bg">
            <div className="circle-photo">
              <img src={profilePic} alt="negafa" />
            </div>

            <div className="info-card">
              <div className="info-left">
                <p><span className="label">Tél :</span> <span className="value">0666666666</span></p>
                <p><span className="label">Ville :</span> <span className="value">Rabat</span></p>
                <p><span className="label">Spécialité :</span> <span className="value">Femme</span></p>
                <p><span className="label">Nombre Produit :</span> <span className="value">50</span></p>
                <p><span className="label">Nombre de Locations :</span> <span className="value">40</span></p>

                <div className="info-bottom">
                  <div className="stars">★ ★ ★ ★ ☆ <span className="opinions">(9)</span></div>
                  <div className="local">Localisation</div>
                  <button className="btn-contact">Contact</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="caftans">
          <h2>Caftans</h2>
          <div className="cards">
            {caftans.map((item) => (
              <Link to={`/caftan/${item.id}`} key={item.id} className="card">
                <div className="card-img">
                  <img src={item.img} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
                <p className="desc">{item.desc}</p>
                <p className="price">{item.price}</p>
                <p className="rating">{item.rating}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
