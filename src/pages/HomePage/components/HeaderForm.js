import React, { useState } from 'react'
import Select from 'react-select'

import { useNavigate } from "react-router-dom";
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

export const HeaderForm = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/offers");
  }
  return (
    <form method='get'>
      <div className="select">
        <Select options={optionsCity} placeholder='Wybierz miasto' />
      </div>
      <div className="select">
        <Select options={optionsPlace} placeholder='Wybierz obiekt' />
      </div>
      <div className="button">
        <button onClick={handleClick}>Szukaj oferty</button>
      </div>
    </form>
  )
}