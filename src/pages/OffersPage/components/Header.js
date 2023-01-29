import React from 'react'
import { Nav } from './Nav'
import { FiltersForm } from './FiltersForm'

export const Header = (props) => {
  return (
    <header>
      <div className="wrapper header">
        <Nav />
        <div className="headerBox">
          <div className="searchFrom">
            <FiltersForm props={props} />
          </div>
        </div>
      </div>
    </header>
  )
}