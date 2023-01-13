import React from 'react'

export const AboutBox = (props) => {
  const { title, description } = props.val
  return (
    <div className="boxSection">
      <div className="boxTitle">
        <h3>{title}</h3>
      </div>
      <div className="boxInformation">
        <p>{description}</p>
      </div>
    </div>
  )
}