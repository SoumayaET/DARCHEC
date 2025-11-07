import './propos.css'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";

import Header from '../produits-page/header/header'


export default function Propos() {
  return (
    
    <div className="section-propos">
      <Header/>
      <div className='container-propos'>
        <div className="title-propos">
          <h1>A propos</h1>
        </div>

        <div className="content-propos">
          <div className="article-propos">
            <h3>
              DarChec est une plateforme marocaine innovante, spécialisée dans 
              la location de vêtements de cérémonie pour toutes les occasions importantes 
              de la vie. Que ce soit pour un mariage, une fiançailles, une soirée traditionnelle
               ou un événement familial, nous mettons à disposition une large gamme de tenues élégantes
                et raffinées. Notre catalogue comprend des caftans somptueux, des complets modernes pour hommes, ainsi que des accessoires soigneusement sélectionnés pour femmes, hommes et enfants. Chaque pièce est choisie avec attention afin de refléter l’authenticité et la richesse du patrimoine vestimentaire marocain.
            </h3>

            <p>
              Notre mission est de rendre la mode traditionnelle accessible à tous,
               tout en valorisant le savoir-faire artisanal local. En optant pour la
               location, nos clients bénéficient d’une solution économique, écologique 
               et pratique, sans compromis sur le style ou la qualité. Nous croyons fermement
                que chaque personne mérite de se sentir belle et confiante lors de ses moments spéciaux,
                 et c’est pourquoi nous nous engageons à offrir un service personnalisé, des conseils 
                 adaptés et une expérience fluide. DarChec, c’est bien plus qu’une plateforme : c’est un
                  hommage à l’élégance marocaine, une passerelle entre tradition et modernité.
            </p>
            <div className="btn-propos">
              <Link to="/" className='link-propos'>Lire plus</Link>
            </div>
          </div> 
        </div>
      <div className='image-section-propos'>
        <img className='logo-propos' src="/images/logo-image.jpeg" alt="" />
        
      </div>
      <div className="social-propos">
        <Link className='link-social-propos' to="/"><FaFacebook /></Link>
        <Link className='link-social-propos' to="/"><AiFillInstagram /></Link>
        <Link className='link-social-propos' to="/"><FaTwitterSquare /></Link>
      </div>
    </div>

  </div>
      
  )
}
