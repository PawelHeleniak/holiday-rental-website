import './assets/global.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { OffersPage } from './pages/OffersPage/OffersPage';

import { Routes, Route } from 'react-router-dom'

const optionsCity = [
  { label: 'Wrocław', value: 1, },
  { label: 'Zakopane', value: 2, },
  { label: 'Szczecin', value: 3, },
  { label: 'Gdańsk', value: 4, },
  { label: 'Solina', value: 5, },
]
const optionsPlace = [
  { label: 'Domek', value: 1, },
  { label: 'Hotel', value: 2, },
  { label: 'Apartament', value: 3, },
]
const optionsMembers = [
  { label: '1', value: 1, },
  { label: '2', value: 2, },
  { label: '3', value: 3, },
  { label: '4', value: 4, },
  { label: '5', value: 5, },
  { label: '6', value: 6, },
]

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage optionsCity={optionsCity} optionsPlace={optionsPlace} optionsMembers={optionsMembers} />} />
      <Route path="/offers" element={<OffersPage optionsCity={optionsCity} optionsPlace={optionsPlace} optionsMembers={optionsMembers} />} />
    </Routes>
  );
}