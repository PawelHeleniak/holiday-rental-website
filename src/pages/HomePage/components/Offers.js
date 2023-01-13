import React from 'react'
import { Offer } from './Offer'

//img
import wroclaw from '../../../assets/img/wroclaw.jpg'
import zakopane from '../../../assets/img/zakopane.jpg'
import szczecin from '../../../assets/img/szczecin.jpg'
import gdansk from '../../../assets/img/gdansk.jpg'
import solina from '../../../assets/img/solina.jpg'

export const Offers = () => {
  const city = [
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
  const offer = city.map(val => <Offer val={val} />)

  return (
    <section>
      <div className="wrapper offers">
        <div className="titleSection">
          <h2>Oferty</h2>
        </div>
        <div className="informationSection">
          {offer}
        </div>
      </div>
    </section>
  )
}