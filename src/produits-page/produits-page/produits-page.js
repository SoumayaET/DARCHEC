import Header from '../header/header.js';
import Produits from './produits.js';
import Recommended from '../recommended/recommended.js';
import Nav from '../nav/nav.js';
import Sidebare from '../sidebare/sidebare.js';
import { useState } from 'react';
import produits from '../../data/data.js';
import Card from '../components/card.js';

export default function Produits_page() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [query, setQuery] = useState('');

  const [panier, setPanier] = useState([]);

  const handleinputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event, type) => {
    const value = event.target.value;
    if (type === 'category') setSelectedCategory(value);
    if (type === 'color') setSelectedColor(value);
    if (type === 'price') setSelectedPrice(value);
  };

  const handleClick = (event, type = 'genre') => {
    const value = event.target.value;
    if (type === 'genre') setSelectedGenre(value);
  };

  function handleAddToCart(produit) {
    setPanier([...panier, produit]);
  }

  function filteredData(produits, category, color, price, genre, query) {
    let filteredProduits = produits;

    if (query && query.trim() !== '') {
      filteredProduits = produits.filter((produit) =>
        produit.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (category && category.trim() !== '') {
      filteredProduits = filteredProduits.filter(
        (produit) => produit.category === category
      );
    }

    if (color && color.trim() !== '') {
      filteredProduits = filteredProduits.filter(
        (produit) => produit.color === color
      );
    }

    if (price && price.trim() !== '') {
      filteredProduits = filteredProduits.filter(
        (produit) => produit.price === price
      );
    }

    if (genre && genre.trim() !== '') {
      filteredProduits = filteredProduits.filter(
        (produit) => produit.genre === genre
      );
    }

    return filteredProduits.map((produit) => (
      <Card
        key={produit.id}
        img={produit.img}
        title={produit.title}
        star={produit.star}
        price={produit.price}
        onAddToCart={() => handleAddToCart(produit)}
      />
    ));
  }

  const result = filteredData(
    produits,
    selectedCategory,
    selectedColor,
    selectedPrice,
    selectedGenre,
    query
  );

  return (
    <div>
      <Header />
      <Sidebare handleChange={handleChange} />
      <Nav
        query={query}
        handleinputChange={handleinputChange}
        cartCount={panier.length}
        panier={panier}
        setPanier={setPanier}
      />
      <Recommended handleClick={handleClick} />
      <Produits result={result} />
    </div>
  );
}