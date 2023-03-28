import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/News'>News</Link>
      <Link to='/Contact'>Contact</Link>
    </nav>
  )
}
export default Navbar;