import React from "react";
import { Nav } from "./Nav";
import { FiltersForm } from "./FiltersForm";

export function Header(props) {
  return (
    <header>
      <div className="wrapper header">
        <Nav />
        <div className="header-content">
          <div className="header-description">
            <h2>Filtruj oferty</h2>
          </div>
          <div className="search-from">
            <FiltersForm props={props} />
          </div>
        </div>
      </div>
    </header>
  );
}
