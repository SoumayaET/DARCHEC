import './colors.css';
import Input from '../../components/input';

export default function Colors({ handleChange }) {
  return (
    <div>
      <h2 className="sidebare-title color-title">Color</h2>

      {/* Bouton Tout */}
      <label className="sidebare-label-container">
        <input
          onChange={(e) => handleChange(e, 'color')}
          type="radio"
          value=""
          name="color"
        />
        <span className="checkmark all"></span>Tout
      </label>

      {/* Couleurs */}
      <Input
        handleChange={handleChange}
        value="noir"
        title="Noir"
        name="color"
        color="black"
        type="color"
      />

      <label className="sidebare-label-container">
        <input
          onChange={(e) => handleChange(e, 'color')}
          type="radio"
          value="blanc"
          name="color"
        />
        <span
          className="checkmark"
          style={{ backgroundColor: "white", border: "2px solid black" }}
        ></span>
        Blanc
      </label>

      <Input
        handleChange={handleChange}
        value="rouge"
        title="Rouge"
        name="color"
        color="red"
        type="color"
      />

      <Input
        handleChange={handleChange}
        value="bleu"
        title="Bleu"
        name="color"
        color="blue"
        type="color"
      />

      <Input
        handleChange={handleChange}
        value="vert"
        title="Vert"
        name="color"
        color="green"
        type="color"
      />

      <Input
        handleChange={handleChange}
        value="jaune"
        title="Jaune"
        name="color"
        color="yellow"
        type="color"
      />
    </div>
  );
}