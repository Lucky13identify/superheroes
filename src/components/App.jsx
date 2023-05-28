import { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import getAllHeroes from '../services/GET/getAllHeroes';
import deleteHero from '../services/DELETE/deleteHero';

const HeroInfo = lazy(() => import('../pages/pages/HeroInfo/HeroInfo'));
const HeroesList = lazy(() => import('./HeroesList/HeroesList'));
const HeroForm = lazy(() => import('./HeroForm/HeroForm'));

export const App = () => {
  const [items, setItems] = useState(0);
  const [heroes, setHeroes] = useState();
  const [hero, setHero] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllHeroes(5, page).then(result => {
      setHeroes(result.data);
      setItems(+result.totalPages);
    });
  }, [hero, page]);

  const onDelete = async idHero => {
    const del = await deleteHero(idHero);
    if (del.message === 'Superhero deleted') {
      getAllHeroes().then(result => setHeroes(result.data));
    }
  };

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            exact
            path="/superheroes"
            element={
              <>
                <HeroForm hero={setHero} />
                <HeroesList
                  items={items}
                  heroes={heroes}
                  pageP={setPage}
                  onDelete={onDelete}
                />
              </>
            }
          />
          <Route path="/super/:id" element={<HeroInfo heroI={setHero} />} />
        </Routes>
      </Suspense>
    </main>
  );
};
