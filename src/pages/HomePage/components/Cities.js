import React from 'react'
import { City } from './City'

//img
import wroclaw from '../../../assets/img/wroclaw.jpg'
import zakopane from '../../../assets/img/zakopane.jpg'
import szczecin from '../../../assets/img/szczecin.jpg'
import gdansk from '../../../assets/img/gdansk.jpg'
import solina from '../../../assets/img/solina.jpg'

export const Cities = () => {
  const cities = [
    {
      name: 'Wrocław',
      img: wroclaw,
    },
    {
      name: 'Zakopane',
      img: zakopane,
    },
    {
      name: 'Szczecin',
      img: szczecin,
    },
    {
      name: 'Gdańsk',
      img: gdansk,
    },
    {
      name: 'Solina',
      img: solina,
    },
  ]
  const city = cities.map(val => <City val={val} />)

  return (
    <section>
      <div className="wrapper cities">
        <div className="titleSection">
          <h2>Miasta</h2>
        </div>
        <div className="informationSection">
          {city}
        </div>
      </div>
    </section>
  )
}