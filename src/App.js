import './assets/scss/global.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { OffersPage } from './pages/OffersPage/OffersPage';

import { Routes, Route } from 'react-router-dom'

const optionsCity = [
  { label: 'Wrocław', value: 0, },
  { label: 'Zakopane', value: 1, },
  { label: 'Szczecin', value: 2, },
  { label: 'Gdańsk', value: 3, },
  { label: 'Solina', value: 4, },
]
const optionsPlace = [
  { label: 'Domek', value: 0, },
  { label: 'Hotel', value: 1, },
  { label: 'Apartament', value: 2, },
]
const optionsMembers = [
  { label: '1', value: 0, },
  { label: '2', value: 1, },
  { label: '3', value: 2, },
  { label: '4', value: 3, },
  { label: '5', value: 4, },
  { label: '6', value: 5, },
]

export const App = () => {
  return (
    <Routes>
      <Route extact path="/" element={<HomePage optionsCity={optionsCity} optionsPlace={optionsPlace} optionsMembers={optionsMembers} />} />
      <Route path="/offers" element={<OffersPage optionsCity={optionsCity} optionsPlace={optionsPlace} optionsMembers={optionsMembers} />} />
    </Routes>
  );
}