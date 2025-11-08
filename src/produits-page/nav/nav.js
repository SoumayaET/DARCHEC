import { FiHeart } from 'react-icons/fi'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { TbTruckDelivery } from 'react-icons/tb'
import './nav.css'

export default function Nav() {
  return (
    <nav className='nav-produits-accueil'>
      <div className='nav-container-accueil'>
        <input
          type='text'
          className='search-input-accueil'
          placeholder='Enter your search'
        />
      </div>
      <div className='profile-container-accueil'>
        <a href='#'>
          <FaShoppingCart className='nav-icons-accueil' />
        </a><span className='count-card'> 0</span>
        

        
        
        <a href='#'>
          <TbTruckDelivery className='nav-icons-accueil' />
        </a>
        <a href='#'>
          <FaUser className='nav-icons-accueil' />
        </a>
      </div>
    </nav>
  )
}
