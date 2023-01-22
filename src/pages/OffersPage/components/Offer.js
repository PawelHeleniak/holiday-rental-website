import React from 'react'

export const Offer = (props) => {
  const { title, adress, place, price } = props.data

  return (
    <div className="offer">
      <div className="offerImg">

      </div>
      <div className="offerBox">
        <div className="title">
          <p>{title}</p>
        </div>
        <div className="description">
          <div className="adress">
            <p>{adress}</p>
          </div>
          <div className="price">
            <p>{price}zł za noc</p>
          </div>
        </div>
      </div>
    </div>
  )
}