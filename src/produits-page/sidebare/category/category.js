import './category.css';
import Input from '../../components/input';

export default function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebare-title">Category</h2>
      <div>
        <label className="sidebare-label-container">
          <input
            onChange={(e) => handleChange(e, 'category')}
            type="radio"
            value=""
            name="category"
          />
          <span className="checkmark"></span>Tout
        </label>

        <Input
          handleChange={handleChange}
          value="vetements"
          title="Vêtements"
          name="category"
          type="category"
        />
        <Input
          handleChange={handleChange}
          value="sacs"
          title="Sacs"
          name="category"
          type="category"
        />
        <Input
          handleChange={handleChange}
          value="chaussures"
          title="Chaussures"
          name="category"
          type="category"
        />
      </div>
    </div>
  );
}