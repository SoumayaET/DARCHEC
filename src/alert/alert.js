import './alert.css';

export default function Alert({ isVisible,errorMessage=null }) {
  if (isVisible) {
    return (
      <div id='alert'>
        <div id='alert-content'>
          <h1></h1>
          <h1 style={{color:errorMessage ? "red" : "green"}}>
            {errorMessage != null ? errorMessage : "Le formulaire a été envoyé avec succès"}</h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}