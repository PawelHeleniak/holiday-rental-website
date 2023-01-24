import React, { useState } from 'react'
import Select from 'react-select'

// export const FiltersForm = ({ optionsCity, optionsPlace, optionsMembers, location }) => {
export const FiltersForm = ({ props }) => {
  const { optionsCity, optionsPlace, optionsMembers, location, activeOptions } = props;
  const { city, place } = location.state.options;

  const [optionss, setOptionss] = useState({
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
          <Select options={optionsCity} placeholder='Wybierz miasto' styles={baseStyles} defaultValue={optionsCity[city]} onChange={e => setOptionss({ ...optionss, city: e.value })} />
        </div>
        <div className="select">
          <Select options={optionsPlace} placeholder='Wybierz objekt' styles={baseStyles} defaultValue={optionsPlace[place]} onChange={e => setOptionss({ ...optionss, place: e.value })} />
        </div>
        <div className="select">
          <Select options={optionsMembers} placeholder='Ilość osób' styles={baseStyles} />
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
          <button type="button" onClick={e => activeOptions(optionss)}>Szukaj oferty</button>
        </div>
      </form>
    </>
  )
}