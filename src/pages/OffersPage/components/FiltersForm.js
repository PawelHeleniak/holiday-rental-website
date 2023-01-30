import React, { useState } from 'react'
import Select from 'react-select'

// options select
import { CITY, PLACE, MEMBERS } from '../../../schemas/Options'

export const FiltersForm = ({ props }) => {
  const { location, activeOptions } = props;
  const { city, place } = location.state.options;


  const [options, setOptions] = useState({
    city: city,
    place: place,
  })

  // filter index
  let cityIndex = CITY.findIndex(e => e.value === options.city)
  let placeIndex = PLACE.findIndex(e => e.value === options.place)

  //react-select style
  const baseStyles = {
    control: (styles) => ({
      ...styles, borderRadius: '6px', padding: '3px',
    }),
    option: (styles) => ({ ...styles, color: 'hsl(0, 0%, 10%)', cursor: 'pointer' }),
  }

  return (
    <>
      <form method="POST">
        <div className="select">
          <Select options={CITY} placeholder='Wybierz miasto' styles={baseStyles} value={CITY[cityIndex]} onChange={e => setOptions({ ...options, city: e.value })} />
        </div>
        <div className="select">
          <Select options={PLACE} placeholder='Wybierz objekt' styles={baseStyles} defaultValue={PLACE[placeIndex]} onChange={e => setOptions({ ...options, place: e.value })} />
        </div>
        <div className="button filter">
          <button type="button" onClick={e => activeOptions(options)}>Filtruj</button>
        </div>
        {/* <div className="button clearFilter">
          <button type="button" onClick={e => setOptions({ ...options, city: '' })} > Wyczyść filtry</button>
        </div> */}
      </form>
    </>
  )
}