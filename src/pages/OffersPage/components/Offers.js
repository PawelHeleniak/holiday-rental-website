import React, { useState } from 'react'
import { Offer } from './Offer'

//img (temporarily)
import house from '../../../assets/img/offers/house.jpg'
import hotel from '../../../assets/img/offers/hotel.jpg'
import apartament from '../../../assets/img/offers/apartament.jpg'

export const Offers = (props) => {
  const { city, place } = props.options

  //temporarily
  const offers = [
    {
      img: house,
      title: 'Lorem ipsum dolor sit amet1',
      adress: 'Zakopane',
      place: 'Domek',
      price: '47',
      cityValue: 1,
      placeValue: 0,
    },
    {
      img: hotel,
      title: 'Lorem ipsum dolor sit amet1',
      adress: 'Zakopane',
      place: 'Hotel',
      price: '47',
      cityValue: 1,
      placeValue: 1,
    },
    {
      img: house,
      title: 'Lorem ipsum dolor sit amet1',
      adress: 'Zakopane',
      place: 'Domek',
      price: '47',
      cityValue: 1,
      placeValue: 0,
    },
    {
      img: hotel,
      title: 'Lorem ipsum dolor sit amet2',
      adress: 'Solina',
      place: 'Hotel',
      price: '59',
      cityValue: 4,
      placeValue: 1,

    },
    {
      img: apartament,
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
          <p>Liczba ofert: {offer.length}</p>
        </div>
        {offer}
      </div>
    </section>
  )
}