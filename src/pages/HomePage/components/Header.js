import React from "react";
import { HeaderForm } from "./HeaderForm";

export function Header() {
  return (
    <header>
      <div className="wrapper header">
        <div className="header-title">
          <p>Wynajem.pl</p>
        </div>
        <div className="header-content">
          <div className="header-description">
            <h2>Wyszukaj miejsce na kolejny pobyt...</h2>
            <p>Szukaj ofert dopasowanych do swoich potrzeb.</p>
          </div>
          <div className="search-from">
            <HeaderForm />
          </div>
        </div>
      </div>
    </header>
  );
}
