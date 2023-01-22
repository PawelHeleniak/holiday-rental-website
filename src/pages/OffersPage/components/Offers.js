import React, { useState } from 'react'
import { Offer } from './Offer'

export const Offers = (props) => {
  const { city, place } = props.options

  const offers = [
    {
      title: 'Lorem ipsum dolor sit amet1',
      adress: 'Zakopane',
      place: 'Domek',
      price: '47',
      cityValue: 1,
      placeValue: 0,
    },
    {
      title: 'Lorem ipsum dolor sit amet1',
      adress: 'Zakopane',
      place: 'Hotel',
      price: '47',
      cityValue: 1,
      placeValue: 1,
    },
    {
      title: 'Lorem ipsum dolor sit amet1',
      adress: 'Zakopane',
      place: 'Domek',
      price: '47',
      cityValue: 1,
      placeValue: 0,
    },
    {
      title: 'Lorem ipsum dolor sit amet2',
      adress: 'Solina',
      place: 'Hotel',
      price: '59',
      cityValue: 4,
      placeValue: 1,

    },
    {
      title: 'Lorem ipsum dolor sit amet3',
      adress: 'Solina',
      place: 'Apartament',
      price: '107',
      cityValue: 4,
      placeValue: 2,
    },
  ]

  const offersList = () => {
    let offersList = [...offers]
    let filtered
    filtered = offersList.filter(offer => offer.cityValue === city && offer.placeValue === place)

    return filtered
  }
  let offer = offersList().map(e => <Offer data={e} />)

  return (
    <section>
      <div className="wrapper offers">
        <div className='offersCount'>
          <p>Znaleziono: 2 oferty</p>
        </div>
        {offer}
      </div>
    </section>
  )
}