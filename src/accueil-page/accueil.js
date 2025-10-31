import Header from './header.js'
import Produits from './produits/produits.js'
import Recommended from './recommended/recommended.js'
import Nav from './nav/nav.js'

function Accueil() {
    return (
        <div >
            <Header />
            <Nav />
            <Produits />
            <Recommended />
            


        </div>
                        );
}

export default Accueil;
