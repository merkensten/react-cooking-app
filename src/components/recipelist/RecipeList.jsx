import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { projectFirsestore } from '../../firebase/config';

// Icons
import TrashCan from '../../assets/trashcan.svg';

// Styles
import './RecipeList.css';

export const RecipeList = ({ recipes }) => {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }

  const handleClick = (id) => {
    projectFirsestore.collection('recipes').doc(id).delete();
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img
            className="delete"
            src={TrashCan}
            alt="Icon of a trashcan"
            onClick={() => handleClick(recipe.id)}
          />
        </div>
      ))}
    </div>
  );
};
