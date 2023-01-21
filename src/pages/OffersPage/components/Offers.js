import React from 'react'
import { Offer } from './Offer'

export const Offers = () => {
  return (
    <section>
      <div className="wrapper offers">
        <div className='offersCount'>
          <p>Znaleziono: 2 oferty</p>
        </div>
        <Offer />
      </div>
    </section>
  )
}