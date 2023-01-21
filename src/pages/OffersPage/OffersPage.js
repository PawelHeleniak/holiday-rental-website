import React from 'react'
import { Offers } from './components/Offers'
import { Header } from './components/Header'

import { useLocation } from "react-router-dom"

export const OffersPage = ({ optionsCity, optionsPlace, optionsMembers }) => {

  // get state from HeaderForm
  const location = useLocation();
  return (
    <>
      <Header optionsCity={optionsCity} optionsPlace={optionsPlace} optionsMembers={optionsMembers} location={location} />
      <Offers />
    </>
  )
}