
import { FaStar , FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Card({img, title, star, price}) {
  return (
    <section className='card-produit2'>
        <img className='card-produit-img2' src={img} alt={title} />

        <div className='card-produit-details2'>
          <h3 className='card-produit-title2'>{title}</h3>
          
          <section className='details2'>
            <Link to="/">voir plus</Link>
          </section>

          <section className='card-produit-reviews2'>
            {star}{star}{star}
          </section>

          <section className='card-produit-price2'>
            <div className="price">
              <h5>{price}</h5>
            </div>
            <button className="btn-ajouter2">
              ajouter
            </button>
            <section className='btn-Loueur'>
            <Link to='/NegafaProfile' className="btn-ajouter">Loueur</Link>
          </section>
          </section>
        </div>
      </section>
  )
}
