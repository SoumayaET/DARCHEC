import './produits.css';
import { FaStar , FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Produits() {
  return (
    <section className='card-container'>
      <section className='card'>
        <img className='card-img' src="/images/caf-1.jpeg" alt="caftan" />

        <div className='card-details'>
          <h3 className='card-title'>Caftan</h3>

          <section className='details'>
            <Link to="/details">voir plus</Link>
          </section>

          <section className='card-reviews'>
            <FaStar className='rating-start' />
            <FaStar className='rating-start' />
            <FaStar className='rating-start' />
            <FaStar className='rating-start' />
            <span className='total-reviews'>(4)</span>
          </section>

          <section className='card-price'>
            <div className="price">
              <h5>200 DH</h5>
            </div>
            <button className="btn-ajouter">
              ajouter
            </button>
          </section>
        </div>
      </section>
      <section className='card'>
        <img className='card-img' src="/images/caf-1.jpeg" alt="caftan" />

        <div className='card-details'>
          <h3 className='card-title'>Caftan</h3>

          <section className='details'>
            <Link to="/details">voir plus</Link>
          </section>

          <section className='card-reviews'>
            <FaStar className='rating-start' />
            <FaStar className='rating-start' />
            <FaStar className='rating-start' />
            <FaStar className='rating-start' />
            <span className='total-reviews'>(4)</span>
          </section>

          <section className='card-price'>
            <div className="price">
              <h5>200 DH</h5>
            </div>
            <button className="btn-ajouter">
              ajouter
            </button>
          </section>
        </div>
      </section>
      <section className='card'>
        <img className='card-img' src="/images/caf-1.jpeg" alt="caftan" />

        <div className='card-details'>
          <h3 className='card-title'>Caftan</h3>

          <section className='details'>
            <Link to="/details">voir plus</Link>
          </section>

          <section className='card-reviews'>
            <FaStar className='rating-start' />
            <FaStar className='rating-start' />
            <FaStar className='rating-start' />
            <FaStar className='rating-start' />
            <span className='total-reviews'>(4)</span>
          </section>

          <section className='card-price'>
            <div className="price">
              <h5>200 DH</h5>
            </div>
            <button className="btn-ajouter">
              ajouter
            </button>
          </section>
        </div>
      </section>
      <section className='card'>
        <img className='card-img' src="/images/caf-1.jpeg" alt="caftan" />

        <div className='card-details'>
          <h3 className='card-title'>Caftan</h3>

          <section className='details'>
            <Link to="/produits-page">voir plus</Link>
          </section>

          <section className='card-reviews'>
            <FaStar className='rating-start' />
            <FaStar className='rating-start' />
            <FaStar className='rating-start' />
            <FaStar className='rating-start' />
            <span className='total-reviews'>(4)</span>
          </section>

          <section className='card-price'>
            <div className="price">
              <h5>200 DH</h5>
            </div>
            <div className="bag">
              <FaShoppingBag className='bag-icon' />
            </div>
          </section>
        </div>
      </section>
      <section className='card'>
        <img className='card-img' src="/images/caf-1.jpeg" alt="caftan" />

        <div className='card-details'>
          <h3 className='card-title'>Caftan</h3>

          <section className='details'>
            <Link to="/produits-page">voir plus</Link>
          </section>

          <section className='card-reviews'>
            <FaStar className='rating-start' />
            <FaStar className='rating-start' />
            <FaStar className='rating-start' />
            <FaStar className='rating-start' />
            <span className='total-reviews'>(4)</span>
          </section>

          <section className='card-price'>
            <div className="price">
              <h5>200 DH</h5>
            </div>
            <div className="bag">
              <FaShoppingBag className='bag-icon' />
            </div>
          </section>
        </div>
      </section>
      <section className='card'>
        <img className='card-img' src="/images/caf-1.jpeg" alt="caftan" />

        <div className='card-details'>
          <h3 className='card-title'>Caftan</h3>

          <section className='details'>
            <Link to="/produits-page">voir plus</Link>
          </section>

          <section className='card-reviews'>
            <FaStar className='rating-start' />
            <FaStar className='rating-start' />
            <FaStar className='rating-start' />
            <FaStar className='rating-start' />
            <span className='total-reviews'>(4)</span>
          </section>

          <section className='card-price'>
            <div className="price">
              <h5>200 DH</h5>
            </div>
            <div className="bag">
              <FaShoppingBag className='bag-icon' />
            </div>
          </section>
        </div>
      </section>
      <section className='card'>
        <img className='card-img' src="/images/caf-1.jpeg" alt="caftan" />

        <div className='card-details'>
          <h3 className='card-title'>Caftan</h3>

          <section className='details'>
            <Link to="/produits-page">voir plus</Link>
          </section>

          <section className='card-reviews'>
            <FaStar className='rating-start' />
            <FaStar className='rating-start' />
            <FaStar className='rating-start' />
            <FaStar className='rating-start' />
            <span className='total-reviews'>(4)</span>
          </section>

          <section className='card-price'>
            <div className="price">
              <h5>200 DH</h5>
            </div>
            <div className="bag">
              <FaShoppingBag className='bag-icon' />
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}