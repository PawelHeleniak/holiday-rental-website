import React, { useState } from 'react'
import Select from 'react-select'

// options select
import { CITY, PLACE, MEMBERS } from '../../../schemas/Options'

import { useNavigate } from "react-router-dom";

export const HeaderForm = () => {
  const [options, setOptions] = useState({
    city: '',
    place: '',
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
      ...styles, borderRadius: '6px', padding: '3px',
    }),
    option: (styles) => ({ ...styles, color: 'hsl(0, 0%, 10%)', cursor: 'pointer' }),
  }

  return (
    <form method='get'>
      <div className="select">
        <Select options={CITY} placeholder='Wybierz miasto' styles={baseStyles} onChange={e => setOptions({ ...options, city: e.value })} />
      </div>
      <div className="select">
        <Select options={PLACE} placeholder='Wybierz obiekt' styles={baseStyles} onChange={e => setOptions({ ...options, place: e.value })} />
      </div>
      <div className="button">
        <button onClick={handleClick}>Szukaj oferty</button>
      </div>
    </form>
  )
}