import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

export const Nav = () => {
  return (
    <nav>
      <div className="headerTitle">
        <p>Wynajem.pl</p>
      </div>
      <div className="backArrow">
        <Link to="/"><FontAwesomeIcon icon={faArrowLeftLong} /></Link>
      </div>
    </nav>
  )
}