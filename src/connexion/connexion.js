import './connexion.css'

export default function Connexion() {
  return (
    <div>
      <form className='container' action="">
        <img src="/images/image-client.jpg" className='logo' alt="livr" />
        <input type="text" placeholder='Nom' />
        <input type="text" placeholder='Prenom' />
        <input type="text" placeholder='Ville' />
        <input type="text" placeholder='Adresse e-mail' />
        <input type="text" placeholder='Mot de passe' />

      </form>
    </div>
  )
}
