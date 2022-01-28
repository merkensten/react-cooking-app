import { Link } from 'react-router-dom';
import { Searchbar } from '../searchbar/Searchbar';
import { useTheme } from '../../hooks/useTheme';

// Styles
import './Navbar.css';

export const Navbar = () => {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ backgroundColor: color }}>
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
