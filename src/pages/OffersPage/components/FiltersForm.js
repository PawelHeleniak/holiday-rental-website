import React from 'react'
import Select from 'react-select'

export const FiltersForm = ({ optionsCity, optionsPlace, optionsMembers, location }) => {
  const { city, place } = location.state.options;

  //react-select style
  const baseStyles = {
    control: (styles) => ({
      ...styles, borderRadius: '6px', padding: '5px',
    }),
    option: (styles) => ({ ...styles, color: 'hsl(0, 0%, 10%)', cursor: 'pointer' }),
  }

  return (
    <form action="get">
      <div className="select">
        <Select options={optionsCity} placeholder='Wybierz miasto' styles={baseStyles} defaultValue={optionsCity[city]} />
      </div>
      <div className="select">
        <Select options={optionsPlace} placeholder='Wybierz objekt' styles={baseStyles} defaultValue={optionsPlace[place]} />
      </div>
      <div className="select">
        <Select options={optionsMembers} placeholder='Ilość osób' styles={baseStyles} />
      </div>
      <div className="inputBox">
        <div className="inputWrapper">
          <label htmlFor="">Od</label>
          <input type="date" name="" id="" />
        </div>
        <div className="inputWrapper">
          <label htmlFor="">Do</label>
          <input type="date" name="" id="" />
        </div>
      </div>
      <div className="button">
        {/* <button onClick={handleClick}>Szukaj oferty</button> */}
      </div>
    </form>
  )
}