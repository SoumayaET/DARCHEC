import './produits.css';
import { FaStar , FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Card from '../components/card' 
export default function Produits({result}) {
  return (
    <div className="container">
      <section className='card-container2'>
        {result}
      </section>
    </div>
  );
}