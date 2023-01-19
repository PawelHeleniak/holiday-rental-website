import React, { useState } from 'react'
import Select from 'react-select'

import { useNavigate } from "react-router-dom";

export const HeaderForm = ({ selectValue }) => {
  const [options, setOptions] = useState({
    city: 0,
    place: 0,
  })

  //navigate
  const navigate = useNavigate();
  function handleClick() {
    navigate('/offers', {
      state: {
        options: options,
      }
    })
  }

  //react-select style
  const baseStyles = {
    control: (styles) => ({
      ...styles, borderRadius: '6px', padding: '5px',
    }),
    option: (styles) => ({ ...styles, color: 'hsl(0, 0%, 10%)', cursor: 'pointer' }),
  }

  return (
    <form method='get'>
      <div className="select">
        <Select options={selectValue.optionsCity} placeholder='Wybierz miasto' styles={baseStyles} onChange={e => setOptions({ ...options, city: e.value })} />
      </div>
      <div className="select">
        <Select options={selectValue.optionsPlace} placeholder='Wybierz obiekt' styles={baseStyles} onChange={e => setOptions({ ...options, place: e.value })} />
      </div>
      <div className="button">
        <button onClick={handleClick}>Szukaj oferty</button>
      </div>
    </form>
  )
}