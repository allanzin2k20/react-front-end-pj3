import './Header.css'
import {MdOutlinePhonelinkRing} from 'react-icons/md'

const Header = () => {
  return (
    <header className='Header'>
      <div className='container'>
        <div className='logoType'>
        <MdOutlinePhonelinkRing />
          <h1>Logo</h1>

        </div>
        <div>Menu</div>
      </div>
    </header>
  )
}

export default Header