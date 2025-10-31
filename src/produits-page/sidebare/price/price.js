import  './price.css'
import Input from '../../components/input';
export default function Price({ handleChange } ) {
  return (
    <div className='ml'>
      <h2 className='sidebare-title price-title'>Prix</h2>
      <label  className="sidebare-label-container">
          <input onChange={ handleChange } type="radio" value="" name="test2"  />
          <span className="checkmark"></span>Tout  
        </label>
      
      
      <Input 
        handleChange={ handleChange } 
        value="200 DH"
        title="0 DH - 200DH"
        name="test2"
      />
      <Input 
        handleChange={ handleChange } 
        value="300"
        title="200DH - 300DH"
        name="test2"
      />
      <Input 
        handleChange={ handleChange } 
        value= "400 DH"
        title="200DH - 400DH"
        name="test2"
      />
      <Input 
        handleChange={ handleChange } 
        value="500 DH"
        title="400DH - 500DH"
        name="test2"
      />
      
      
    </div>
  )
}
