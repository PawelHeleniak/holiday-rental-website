import './assets/global.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { OffersPage } from './pages/OffersPage/OffersPage';

import { Routes, Route } from 'react-router-dom'
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/offers" element={<OffersPage />} />
    </Routes>
  );
}