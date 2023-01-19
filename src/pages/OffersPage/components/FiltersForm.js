import React from 'react'
import Select from 'react-select'

export const FiltersForm = ({ optionsCity, location }) => {

  //react-select style
  const baseStyles = {
    option: (styles) => ({ ...styles, color: 'hsl(0, 0%, 10%)', cursor: 'pointer' }),
  }
  console.log(location);
  return (
    <form action="get">
      <div className="select">
        <Select options={optionsCity} placeholder='Wybierz miasto' styles={baseStyles} defaultValue={optionsCity[1]} />
      </div>
      <div className="select">
        <Select options={optionsCity} placeholder='Wybierz objekt' styles={baseStyles} />
      </div>
      <div className="select">
        <Select options={optionsCity} placeholder='Ilość osób' styles={baseStyles} />
      </div>
      <div className="inputWrapper">
        <label htmlFor="">Od</label>
        <input type="date" name="" id="" />
      </div>
      <div className="inputWrapper">
        <label htmlFor="">Do</label>
        <input type="date" name="" id="" />
      </div>
      <div className="button">
        {/* <button onClick={handleClick}>Szukaj oferty</button> */}
      </div>
    </form>
  )
}