import { FiHeart } from 'react-icons/fi'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { TbTruckDelivery } from 'react-icons/tb'
import './nav.css'

export default function Nav() {
  return (
    <nav className='second-nav'>
      <div className='nav-container'>
        <input
          type='text'
          className='search-input'
          placeholder='Enter your search'
        />
      </div>
      <div className='profile-container'>
        <a href='#'>
          <FaShoppingCart className='nav-icons' />
        </a>
        <a href='#'>
          <FiHeart className='nav-icons' />
        </a>
        <a href='#'>
          <TbTruckDelivery className='nav-icons' />
        </a>
        <a href='#'>
          <FaUser className='nav-icons' />
        </a>
      </div>
    </nav>
  )
}
