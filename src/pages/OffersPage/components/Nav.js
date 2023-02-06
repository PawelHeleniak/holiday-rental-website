import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export function Nav() {
  return (
    <nav>
      <div className="header-title">
        <p>Wynajem.pl</p>
      </div>
      <div className="backArrow">
        <Link to="/holiday-rental-website">
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </Link>
      </div>
    </nav>
  );
}
