import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';

// components
import { Navbar } from './components/navbar/Navbar';
import { ThemeSelector } from './components/themeselector/ThemeSelector';

// Page components
import { Home } from './pages/home/Home';
import { Recipe } from './pages/recipe/Recipe';
import { Create } from './pages/create/Create';
import { Search } from './pages/search/Search';
import { NotFound } from './pages/notfound/NotFound';

// Styles
import './App.css';

function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
