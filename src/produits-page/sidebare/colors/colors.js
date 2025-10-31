import  './colors.css'
import Input from '../../components/input';
export default function Colors({ handleChange }) {
  return (
    <div>
      <h2 className="sidebare-title color-title">Color</h2>
      <label  className="sidebare-label-container">
          <input onChange={ handleChange } type="radio" value="" name="test1"  />
          <span className="checkmark all"></span>Tout  
        </label>
      <Input 
        handleChange={ handleChange } 
        value="noir"
        title="Noir"
        name="test1"
        color="black"
      />
      <label className="sidebare-label-container">
        <input onChange={handleChange} 
        type="radio" value="blanc" name="test1" />
        <span className="checkmark" 
        style={{ backgroundColor: "white", border: "2px solid black" }}></span>
        Blanc
      </label>  
      <Input 
        handleChange={ handleChange } 
        value="rouge"
        title="Rouge"
        name="test1"
        color="red"
      />

      <Input 
        handleChange={ handleChange } 
        value="bleu"
        title="Bleu"
        name="test1"
        color="blue"
      />
      <Input 
        handleChange={ handleChange } 
        value="vert"
        title="Vert"
        name="test1"
        color="green"
      />
      <Input 
        handleChange={ handleChange } 
        value="jaune"
        title="Jaune"
        name="test1"
        color="yellow"
      />
    </div>
  )
}
