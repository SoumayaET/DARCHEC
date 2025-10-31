import './produits.css';
import { FaStar , FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Card from '../components/card' 
export default function Produits({result}) {
  return (
    <section className='card-container'>
      {result}
    </section>
  );
}