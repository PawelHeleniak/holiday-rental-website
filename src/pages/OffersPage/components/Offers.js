import React from 'react'
import { Offer } from './Offer'

export const Offers = () => {
  const offers = [
    {
      title: 'Lorem ipsum dolor sit amet1',
      adress: 'Zakopane',
      place: 'Domek',
      price: '47',
    },
    {
      title: 'Lorem ipsum dolor sit amet2',
      adress: 'Zakopane',
      place: 'Hotel',
      price: '59',
    },
    {
      title: 'Lorem ipsum dolor sit amet3',
      adress: 'Solina',
      place: 'Apartament',
      price: '107',
    },
  ]

  const offersList = () => {
    let offersList = [...offers]
    let filtered
    filtered = offersList.filter(offer => offer.adress === 'Zakopane' && offer.place === 'Hotel')

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