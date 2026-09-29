import { Routes, Route, HashRouter } from 'react-router-dom';
import { FilmDetails } from '../pages/FilmDetails';
import { Layout } from '../components/Layout';
import { Home } from '../pages/Home';

export function Router() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films/:id" element={<FilmDetails />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}