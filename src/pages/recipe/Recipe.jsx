import { useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useEffect, useState } from 'react';
import { projectFirsestore } from '../../firebase/config';

// Styles
import './Recipe.css';

export const Recipe = () => {
  const { id } = useParams();
  const { mode } = useTheme();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPedning] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPedning(true);

    const unsub = projectFirsestore
      .collection('recipes')
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPedning(false);
          setRecipe(doc.data());
        } else {
          setIsPedning(false);
          setError('Could not find that recipe');
        }
      });

    return () => unsub();
  }, [id]);

  const handleClick = () => {
    projectFirsestore.collection('recipes').doc(id).update({
      title: 'Something completely different',
    });
  };
  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} minutes to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
          <button onClick={handleClick}>Update me</button>
        </>
      )}
    </div>
  );
};
