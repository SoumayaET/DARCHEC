import './category.css'
import Input from '../../components/input';
export default function Category({ handleChange }) {
  return (
    <div >
      <h2 className="sidebare-title">Category</h2>
      <div>
        <label  className="sidebare-label-container">
          <input onChange={ handleChange } type="radio" value="" name="test"  />
          <span className="checkmark"></span>Tout  
        </label>

      <Input 
        handleChange={ handleChange } 
        value="vetements"
        title="Vtements"
        name="test"
      />
      <Input  handleChange={ handleChange } 
        value="sacs"
        title="Sacs"
        name="test"
      /> 
      <Input  handleChange={ handleChange } 
        value="chaussures"
        title="Chaussures"
        name="test"
      /> 
      
      </div>
    </div>
  )
}
