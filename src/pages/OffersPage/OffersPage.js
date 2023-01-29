import React, { useState } from 'react'
import { Offers } from './components/Offers'
import { Header } from './components/Header'

import { useLocation } from "react-router-dom"

export const OffersPage = () => {
  const [options, setOptions] = useState([
    {
      city: '',
      place: '',
    }
  ])
  // get state from HeaderForm
  const location = useLocation();

  const activeOptions = ({ city, place }) => {
    setOptions({ ...options, city, place })
  }
  return (
    <>
      <Header location={location} activeOptions={activeOptions} />
      <Offers options={options} />
    </>
  )
}