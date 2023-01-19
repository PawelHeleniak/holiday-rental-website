import React, { useState } from 'react'
import Select from 'react-select'

import { useNavigate } from "react-router-dom";

export const HeaderForm = ({ selectValue }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/offers')
  }

  //react-select style
  const baseStyles = {
    option: (styles) => ({ ...styles, color: 'hsl(0, 0%, 10%)', cursor: 'pointer' }),
  }

  return (
    <form method='get'>
      <div className="select">
        <Select options={selectValue.optionsCity} placeholder='Wybierz miasto' styles={baseStyles} />
      </div>
      <div className="select">
        <Select options={selectValue.optionsPlace} placeholder='Wybierz obiekt' styles={baseStyles} />
      </div>
      <div className="button">
        <button onClick={handleClick}>Szukaj oferty</button>
      </div>
    </form>
  )
}