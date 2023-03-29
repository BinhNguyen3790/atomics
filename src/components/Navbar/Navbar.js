import { Link } from 'react-router-dom';
import './Navbar.scss';
import './styled.js';
function Navbar() {
  return (
    <div className='boxNavbar'>
      <a className='navbar-link' href='#'>
        <i className="fa-solid fa-bars"></i>
      </a>
      <nav className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/News'>News</Link>
        <Link to='/Contact'>Contact</Link>
      </nav>
    </div>
  )
}
export default Navbar;