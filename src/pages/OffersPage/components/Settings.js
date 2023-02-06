import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faThLarge } from "@fortawesome/free-solid-svg-icons";

export function Settings() {
  return (
    <div className="settings">
      <button type="button" className="button-container">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <button type="button" className="button-container">
        <FontAwesomeIcon icon={faThLarge} />
      </button>
    </div>
  );
}
