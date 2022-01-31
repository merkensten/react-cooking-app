import { projectFirsestore } from '../../firebase/config';
import { useEffect, useState } from 'react';
// components
import { RecipeList } from '../../components/recipelist/RecipeList';

// Styles
import './Home.css';

export const Home = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPedning] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPedning(true);

    const unsub = projectFirsestore.collection('recipes').onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError('No recipes to load');
          setIsPedning(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPedning(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPedning(false);
      }
    );

    return () => unsub();
  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};
