import React from 'react'
import { HeaderForm } from './HeaderForm'

export const Header = () => {
  return (
    <header>
      <div className="wrapper header">
        <div className="headerTitle">
          <p>Wynajem.pl</p>
        </div>
        <div className="headerBox">
          <div className="headerDescription">
            <p>Znajdź miejsce na kolejny pobyt</p>
            <p>Szukaj ofert dopasowanych do swoich potrzeb</p>
          </div>
          <div className="searchFrom">
            <HeaderForm />
          </div>

        </div>
      </div>
    </header>
  )
}