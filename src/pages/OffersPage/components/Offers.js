import React from "react";
import PropTypes from "prop-types";
import { Offer } from "./Offer";
import { PRODUCTS } from "../../../schemas/Products";

export function Offers({ options }) {
  const { city, place } = options;

  const productsList = () => {
    const products = [...PRODUCTS];
    const filtered = products.filter((product) => {
      if (!city || !place) {
        return product.cityValue === city || product.placeValue === place;
      }
      return product.cityValue === city && product.placeValue === place;
    });

    return filtered;
  };
  const product = productsList().map((e) => <Offer data={e} />);

  return (
    <section>
      <div className="wrapper offers">
        <div className="offers-count">
          <p>Liczba ofert: {product.length}</p>
        </div>
        <div className="offers-container">{product}</div>
      </div>
    </section>
  );
}

Offers.propTypes = {
  options: PropTypes.objectOf.isRequired,
};
