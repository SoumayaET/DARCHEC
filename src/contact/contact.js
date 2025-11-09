import './contact.css'
import Alert from '../alert/alert'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../produits-page/header/header'


export default function Contact() {
  
  const [errorMessage, setErrorMessage] = useState(null); 
  const [showAlert , setShowAlert] = useState(false)
  const [formInput,setFormInput]=useState({
    nom:"",
    email:"",
    message : ""
  });
  
  function handleformenvoyer(event){
      event.preventDefault();
      setErrorMessage(null);
      const {email} = formInput;
      if (!email.endsWith("@gmail.com")) {
        setErrorMessage("Seules les adresses Gmail sont autorisées");
      } 
      setShowAlert(true)
    }
    const btndisablede = formInput.nom =="" || 
                        formInput.email ==   "" ||
                        formInput.message == "" 
    let btnenvoyerContact = "" 
    function handleDivclick(){
      if (showAlert) {
      setShowAlert(false)
    }
  
    }
  return (
    
    <div className='flex-contact' onClick={handleDivclick} style={{position:"relative"}}  >
    <div style={{width:"100%", margin:"0px" ,position:"absolute" ,top:"0"}}>
      <Header />  
    </div>
      <div className="title-contact">
          <h1>Connectez-nous</h1>
      </div>
      <form id="form" className='form-contact'>

        <h3 className='title2'>Veuillez remplir le formulaire</h3> 
        <hr />
        <input value={formInput.nom} onChange={(event)=>{
          setFormInput({...formInput, nom: event.target.value});
        } } type="text" placeholder='Nom'  className='input-contact' />

        <input value={formInput.email} onChange={(event)=>{
          setFormInput({...formInput, email: event.target.value});
        } } type="email" placeholder='E-mail' className='input-contact' />

        <textarea value={formInput.message} onChange={(event)=>{
          setFormInput({...formInput, message: event.target.value});
        } } placeholder='Votre message' name="" id="" className='textarea-contact'></textarea>      
        <button className={btndisablede ? "disabled-contact" : " "} disabled={btndisablede} onClick={handleformenvoyer}  id='btn-envoyer'>Envoyer</button>
      </form>
      <Alert errorMessage ={errorMessage} isVisible={showAlert} />
    </div>
  )
}