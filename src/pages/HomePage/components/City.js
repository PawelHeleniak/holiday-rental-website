import React from 'react'
import { useNavigate } from "react-router-dom";

export const City = (props) => {
  const { name, img, city } = props.val

  //navigate
  const navigate = useNavigate();
  function handleClick() {
    navigate('/offers', {
      state: {
        options: { city },
      }
    })
  }
  return (
    <div className="cityBox">
      <div className="city">
        <div className="cityPicture">
          <div className="cityName"><p>{name}</p></div>
          <a onClick={handleClick}>
            <img src={img} alt={name} />
          </a>
        </div>
      </div>
    </div>
  )
}