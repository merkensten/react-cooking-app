import { Link } from 'react-router-dom';
import { Searchbar } from '../searchbar/Searchbar';

// Styles
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};
