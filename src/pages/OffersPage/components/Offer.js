import React from "react";
import PropTypes from "prop-types";

export function Offer({ data }) {
  const { title, adress, place, price, img } = data;
  return (
    <div className="offer">
      <div className="offerImg">
        <img src={img} alt="" />
      </div>
      <div className="offerBox">
        <div className="title">
          <p>{title}</p>
        </div>
        <div className="description">
          <div className="adress">
            <p>{adress}</p>
            <p>{place}</p>
          </div>
          <div className="price">
            <p>{price}zł za noc</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Offer.propTypes = {
  data: PropTypes.objectOf.isRequired,
};
