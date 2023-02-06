import React, { useState } from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

// options select
import { CITY, PLACE } from "../../../schemas/Options";

export function FiltersForm({ props }) {
  // get state from HeaderForm
  const location = useLocation();
  const { city, place } = location.state.options;

  const { activeOptions } = props;

  const [options, setOptions] = useState({
    filteredCity: city,
    filteredPlace: place,
  });

  // filter index
  const cityIndex = CITY.findIndex((e) => e.value === options.filteredCity);
  const placeIndex = PLACE.findIndex((e) => e.value === options.filteredPlace);

  // react-select style
  const baseStyles = {
    control: (styles) => ({
      ...styles,
      borderRadius: "6px",
      padding: "3px",
    }),
    option: (styles) => ({
      ...styles,
      color: "hsl(0, 0%, 10%)",
      cursor: "pointer",
    }),
  };
  const handleClickFilter = () => {
    setOptions({ ...options, filteredPlace: "", filteredCity: "" });
    activeOptions("", "");
  };
  return (
    <form method="POST">
      <div className="content">
        <div className="select-container">
          <Select
            options={CITY}
            placeholder="Wybierz miasto"
            styles={baseStyles}
            value={options.filteredCity ? CITY[cityIndex] : ""}
            onChange={(e) => setOptions({ ...options, filteredCity: e.value })}
          />
        </div>
        <div className="select-container">
          <Select
            options={PLACE}
            placeholder="Wybierz objekt"
            styles={baseStyles}
            value={options.filteredPlace ? PLACE[placeIndex] : ""}
            onChange={(e) => setOptions({ ...options, filteredPlace: e.value })}
          />
        </div>
        <div className="button-container filter">
          <button type="button" onClick={() => activeOptions(options)}>
            Filtruj
          </button>
        </div>
      </div>
      <div className="filters">
        <div className="button-container clearFilter">
          <button type="button" onClick={() => handleClickFilter()}>
            Wyczyść filtry
          </button>
        </div>
      </div>
    </form>
  );
}

FiltersForm.propTypes = {
  props: PropTypes.objectOf.isRequired,
  activeOptions: PropTypes.objectOf.isRequired,
};
