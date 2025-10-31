
import { FaStar , FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Card({img, title, star, price}) {
  return (
    <section className='card'>
        <img className='card-img' src={img} alt={title} />

        <div className='card-details'>
          <h3 className='card-title'>{title}</h3>
          
          <section className='details'>
            <Link to="/details">voir plus</Link>
          </section>

          <section className='card-reviews'>
            {star}{star}{star}
          </section>

          <section className='card-price'>
            <div className="price">
              <h5>{price}</h5>
            </div>
            <button className="btn-ajouter">
              ajouter
            </button>
          </section>
        </div>
      </section>
  )
}
