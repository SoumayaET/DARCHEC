import './price.css';
import Input from '../../components/input';

export default function Price({ handleChange }) {
  return (
    <div className='ml'>
      <h2 className='sidebare-title price-title'>Prix</h2>

      {/* Bouton Tout */}
      <label className="sidebare-label-container">
        <input
          onChange={(e) => handleChange(e, 'price')}
          type="radio"
          value=""
          name="price"
        />
        <span className="checkmark"></span>Tout
      </label>

      {/* Plages de prix */}
      <Input
        handleChange={handleChange}
        value="200 DH"
        title="0 DH - 200DH"
        name="price"
        type="price"
      />
      <Input
        handleChange={handleChange}
        value="300"
        title="200DH - 300DH"
        name="price"
        type="price"
      />
      <Input
        handleChange={handleChange}
        value="400 DH"
        title="300DH - 400DH"
        name="price"
        type="price"
      />
      <Input
        handleChange={handleChange}
        value="500 DH"
        title="400DH - 500DH"
        name="price"
        type="price"
      />
    </div>
  );
}