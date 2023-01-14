import React, { useState } from 'react'
import Select from 'react-select'

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

  return (
    <form action="">
      <div className="select">
        <Select options={optionsCity} />
      </div>
      <div className="select">
        <Select options={optionsPlace} />
      </div>
      <div className="button">
        <button>Szukaj oferty</button>
      </div>
    </form>
  )
}