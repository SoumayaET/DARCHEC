import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles.css";

export default function CaftanDetails() {
  const { id } = useParams();

  const data = {
    1: {
        name: "Sac Marron Serpent",
        taille: "Petit, Moyen, Grand",
        matiere: "Cuir, Similicuir",
        duree: "3 jours",
        details: "Texture serpent, fermoir métallique",
        conditions: "Nettoyage inclus, dépôt de garantie requis",
        avis: "★★★★☆",
        prix: "350 DH",
        images: ["/Logo111.jpg", "/Logo111.jpg", "/Logo111.jpg"], 
        couleurs: ["#922c03ff", "#141312ff"], 
    }, 
    2: {
        name: "Caftan Royal Bleu Perlé",
        taille: "S, M, L",
        matiere: "Soie, satin",
        duree: "3 jours",
        details: "Perles, Broderie",
        conditions: "Nettoyage inclus, dépôt de garantie requis",
        avis: "★★★★☆",
        prix: "350 DH",
        images: ["/Logo222.jpg", "/Logo222.jpg", "/Logo222.jpg"], // depuis dossier public
        couleurs: ["#7b001a", "#c1b3aa"],
    },
     3: {
        name: "Sac Beige",
        taille: "Petit, Moyen, Grand",
        matiere: "Cuir, Similicuir",
        duree: "3 jours",
        details: "Texture lisse, fermoir métallique",
        conditions: "Nettoyage inclus, dépôt de garantie requis",
        avis: "★★★★☆",
        prix: "350 DH",
        images: ["/Logo000.jpg", "/Logo000.jpg", "/Logo000.jpg"], // images depuis public
        couleurs: ["#f5f5dc", "#d2b48c"], // tons beige
},
4: {
    name: "Veste Homme Gris",
    taille: "S, M, L, XL",
    matiere: "Laine, Polyester",
    duree: "3 jours",
    details: "Coupe classique, boutons métalliques",
    conditions: "Nettoyage inclus, dépôt de garantie requis",
    avis: "★★★★☆",
    prix: "500 DH",
    images: ["/Logo444.jpg", "/Logo444.jpg", "/Logo444.jpg"], // depuis dossier public
    couleurs: ["#808080", "#A9A9A9"], // nuances de gris
},

5: {
    name: "Caftan Rouge Royal",
    taille: "S, M, L",
    matiere: "Soie, Satin",
    duree: "3 jours",
    details: "Broderie dorée, perles décoratives",
    conditions: "Nettoyage inclus, dépôt de garantie requis",
    avis: "★★★★★",
    prix: "1250 DH",
    images: ["/Logo555.jpg", "/Logo555.jpg", "/Logo555.jpg"], // depuis dossier public
    couleurs: ["#ff0000", "#b20000"], // nuances de rouge
},
6: {
    name: "Veste Homme Bleu Clair",
    taille: "S, M, L, XL",
    matiere: "Coton, Polyester",
    duree: "3 jours",
    details: "Coupe moderne, fermeture à boutons",
    conditions: "Nettoyage inclus, dépôt de garantie requis",
    avis: "★★★★☆",
    prix: "480 DH",
    images: ["/Logo666.jpg", "/Logo666.jpg", "/Logo666.jpg"], // depuis dossier public
    couleurs: ["#add8e6", "#87cefa"], // nuances de bleu clair
},
7: {
    name: "Sac Blanc Motif Bleu",
    taille: "Petit, Moyen, Grand",
    matiere: "Cuir, Similicuir",
    duree: "3 jours",
    details: "Motif bleu décoratif, fermoir métallique",
    conditions: "Nettoyage inclus, dépôt de garantie requis",
    avis: "★★★★☆",
    prix: "380 DH",
    images: ["/Logo777.jpg", "/Logo777.jpg", "/Logo777.jpg"], // depuis dossier public
    couleurs: ["#ffffff", "#0000ff"], // blanc et bleu
},
8: {
    name: "Veste Homme Rose Bébé",
    taille: "S, M, L, XL",
    matiere: "Coton, Polyester",
    duree: "3 jours",
    details: "Coupe moderne, fermeture à boutons",
    conditions: "Nettoyage inclus, dépôt de garantie requis",
    avis: "★★★★☆",
    prix: "490 DH",
    images: ["/Logo888.jpg", "/Logo888.jpg", "/Logo888.jpg"], // depuis dossier public
    couleurs: ["#ffc0cb", "#ffb6c1"], // nuances de rose bébé
},
9: {
    name: "Caftan Noir Élégance",
    taille: "S, M, L",
    matiere: "Soie, Satin",
    duree: "3 jours",
    details: "Design sophistiqué avec perles et broderie fine",
    conditions: "Nettoyage inclus, dépôt de garantie requis",
    avis: "★★★★☆",
    prix: "1300 DH",
    images: ["/Logo999.jpg", "/Logo999.jpg", "/Logo999.jpg"], // depuis dossier public
    couleurs: ["#000000", "#1c1c1c"], // nuances de noir
},






};


  const item = data[id];
  if (!item) return <p>Caftan introuvable</p>;

  return (
    <div className="details-page">
      <div className="details-content">
        {/* Section image principale */}
        <div className="details-left">
          <img src={item.images[0]} alt={item.name} className="main-img" />

          {/* Miniatures */}
          <div className="thumbs">
            {item.images.map((src, i) => (
              <img key={i} src={src} alt={`thumb-${i}`} className="thumb" />
            ))}
          </div>
        </div>

        {/* Section texte */}
        <div className="details-right">
          <h2>Caftan</h2>
          <p><strong>Nom de modèle :</strong> {item.name}</p>
          <p><strong>Taille disponible :</strong> {item.taille}</p>
          <p><strong>Matière :</strong> {item.matiere}</p>
          <p><strong>Durée de location :</strong> {item.duree}</p>
          <p><strong>Détails :</strong> {item.details}</p>
          <p><strong>Conditions de location :</strong> {item.conditions}</p>
          <p><strong>Avis clients :</strong> <span className="stars">{item.avis}</span></p>
          <p className="prix"><strong>Prix de location :</strong> {item.prix}</p>

          {/* Couleurs */}
          <div className="colors">
            {item.couleurs.map((c, i) => (
              <div key={i} className="color" style={{ backgroundColor: c }}></div>
            ))}
          </div>

          {/* Boutons */}
          <div className="buttons">
            <button className="btn-green">Disponible</button>
            <button className="btn-orange">Ajouter</button>
          </div>

          <Link to="/" className="btn-retour">⬅ Retour</Link>
        </div>
      </div>
    </div>
  );
}
