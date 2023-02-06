import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export function City({ data }) {
  const { name, img, city } = data;

  // navigate
  const navigate = useNavigate();
  function handleClick() {
    navigate("/offers", {
      state: {
        options: { city },
      },
    });
  }

  return (
    <div className="city-container">
      <div className="city">
        <div className="city-picture">
          <div className="city-name">
            <p>{name}</p>
          </div>
          <button type="button" onClick={handleClick}>
            <img src={img} alt={name} />
          </button>
        </div>
      </div>
    </div>
  );
}
City.propTypes = {
  data: PropTypes.objectOf.isRequired,
};
