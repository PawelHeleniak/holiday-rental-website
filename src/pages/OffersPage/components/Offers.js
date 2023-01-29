import React from 'react'
import { Offer } from './Offer'
import { PRODUCTS } from '../../../schemas/Products'

export const Offers = (props) => {
  const { city, place } = props.options

  const productsList = () => {
    let productsList = [...PRODUCTS]
    let filtered
    filtered = productsList.filter(product => {
      if (!city || !place) {
        return product.cityValue === city || product.placeValue === place
      } else {
        return product.cityValue === city && product.placeValue === place
      }
    })

    return filtered
  }
  let product = productsList().map(e => <Offer data={e} />)

  return (
    <section>
      <div className="wrapper offers">
        <div className='offersCount'>
          <p>Liczba ofert: {product.length}</p>
        </div>
        {product}
      </div>
    </section>
  )
}