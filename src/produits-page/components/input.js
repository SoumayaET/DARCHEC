export default function Input({ handleChange, value, title, name, color, type }) {
  return (
    <div>
      <label className="sidebare-label-container">
        <input
          onChange={(e) => handleChange(e, type)}
          type="radio"
          value={value}
          name={name}
        />
        <span
          className="checkmark"
          style={{ backgroundColor: color }}
        ></span>
        {title}
      </label>
    </div>
  );
}