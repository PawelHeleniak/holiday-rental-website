import React from 'react'

export const Offer = (props) => {
  const { name, img } = props.val

  return (
    <div className="cityBox">
      <div className="city">
        <div className="cityPicture">
          <div className="cityName"><p>{name}</p></div>
          <img src={img} alt={name} />
        </div>
      </div>
    </div>
  )
}