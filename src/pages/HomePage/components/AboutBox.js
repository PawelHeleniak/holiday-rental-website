import React from "react";
import PropTypes from "prop-types";

export function AboutBox({ about }) {
  return (
    <div className="boxSection">
      <div className="imgWrapper">
        <div className="img">
          <img src={about.img} alt={about.title} />
        </div>
      </div>
      <div className="boxTitle">
        <h3>{about.title}</h3>
      </div>
      <div className="boxInformation">
        <p>{about.description}</p>
      </div>
    </div>
  );
}

AboutBox.propTypes = {
  about: PropTypes.objectOf.isRequired,
};
