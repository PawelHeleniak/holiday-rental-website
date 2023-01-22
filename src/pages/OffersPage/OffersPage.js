import React, { useState } from 'react'
import { Offers } from './components/Offers'
import { Header } from './components/Header'

import { useLocation } from "react-router-dom"

export const OffersPage = ({ optionsCity, optionsPlace, optionsMembers }) => {
  const [options, setOptions] = useState([
    {
      city: 0,
      place: 0,
    }
  ])
  // get state from HeaderForm
  const location = useLocation();

  const activeOptions = ({ city, place }) => {
    setOptions({ ...options, city, place })
    console.log('to', city);
    console.log('to', place);
  }
  return (
    <>
      <Header optionsCity={optionsCity} optionsPlace={optionsPlace} optionsMembers={optionsMembers} location={location} activeOptions={activeOptions} />
      <Offers options={options} />
    </>
  )
}