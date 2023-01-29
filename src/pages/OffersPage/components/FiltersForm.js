import React, { useState } from 'react'
import Select from 'react-select'

// options select
import { CITY, PLACE, MEMBERS } from '../../../schemas/Options'

// export const FiltersForm = ({ optionsCity, optionsPlace, optionsMembers, location }) => {
export const FiltersForm = ({ props }) => {
  const { location, activeOptions } = props;
  const { city, place } = location.state.options;

  const [options, setOptionss] = useState({
    city: city,
    place: place,
  })

  //react-select style
  const baseStyles = {
    control: (styles) => ({
      ...styles, borderRadius: '6px', padding: '5px',
    }),
    option: (styles) => ({ ...styles, color: 'hsl(0, 0%, 10%)', cursor: 'pointer' }),
  }

  return (
    <>
      <form method="POST">
        <div className="select">
          <Select options={CITY} placeholder='Wybierz miasto' styles={baseStyles} defaultValue={CITY[city]} onChange={e => setOptionss({ ...options, city: e.value })} />
        </div>
        <div className="select">
          <Select options={PLACE} placeholder='Wybierz objekt' styles={baseStyles} defaultValue={PLACE[place]} onChange={e => setOptionss({ ...options, place: e.value })} />
        </div>
        <div className="select">
          <Select options={MEMBERS} placeholder='Ilość osób' styles={baseStyles} />
        </div>
        {/* <div className="inputBox">
          <div className="inputWrapper">
            <label htmlFor="">Od</label>
            <input type="date" name="" id="" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="">Do</label>
            <input type="date" name="" id="" />
          </div>
        </div> */}
        <div className="button">
          <button type="button" onClick={e => activeOptions(options)}>Szukaj oferty</button>
        </div>
      </form>
    </>
  )
}