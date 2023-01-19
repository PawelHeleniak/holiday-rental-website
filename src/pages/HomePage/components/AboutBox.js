import React from 'react'

export const AboutBox = (props) => {
  const { title, description, img } = props.val
  return (
    <div className="boxSection">
      <div className="imgWrapper">
        <div className="img">
          <img src={img} alt={title} />
        </div>
      </div>
      <div className="boxTitle">
        <h3>{title}</h3>
      </div>
      <div className="boxInformation">
        <p>{description}</p>
      </div>
    </div>
  )
}