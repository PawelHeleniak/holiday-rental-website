import './assets/scss/global.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { OffersPage } from './pages/OffersPage/OffersPage';

import { Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <Routes>
      <Route extact path="/holiday-rental-website" element={<HomePage />} />
      <Route path="/offers" element={<OffersPage />} />
    </Routes>
  );
}