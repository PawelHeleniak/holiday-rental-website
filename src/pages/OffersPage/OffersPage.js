import React from 'react'
import { Nav } from './components/Nav'
import { FiltersForm } from './components/FiltersForm'

import { useLocation } from "react-router-dom"

export const OffersPage = ({ optionsCity, optionsPlace, optionsMembers }) => {

  // get state from HeaderForm
  const location = useLocation();

  return (
    <header>
      <div className="wrapper header">
        <Nav />
        <FiltersForm optionsCity={optionsCity} optionsPlace={optionsPlace} optionsMembers={optionsMembers} location={location} />
      </div>
    </header>
  )
}