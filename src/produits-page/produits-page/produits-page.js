import Header from '../header/header.js';
import Produits from './produits.js';
import Recommended from '../recommended/recommended.js';
import Nav from '../nav/nav.js';
import Sidebare from '../sidebare/sidebare.js';
import { useState } from 'react';
import produits from '../../data/data.js';
import Card from '../components/card.js';

export default function Produits_page() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //------------input Filter------------
  const [query, setQuery] = useState('');

  const handleinputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = produits.filter(
    (produit) =>
      produit.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //------------radio Filter------------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //------------buttons Filter------------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(produits, selected, query) {
    let filteredProduits = produits;

    // filtering input Items
    if (query) {
      filteredProduits = filteredItems;
    }

    // selected Filter
    if (selected) {
      filteredProduits = filteredProduits.filter(
        ({ genre, category, color, price }) =>
          genre === selected ||
          category === selected ||
          color === selected ||
          price === selected
      );
    }

    return filteredProduits.map(({img, title, star, price}) => (
      < Card 
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      price={price}
      />
    ));
  }
  const result = filteredData(produits,selectedCategory,query);

  return (
    <div>
      <Header />
      <Sidebare handleChange={handleChange} />
      <Nav query={query} handleinputChange={handleinputChange} />
      <Recommended handleClick={handleClick} />
      <Produits result={result } />
    </div>
  );
}
