import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Offers } from "./components/Offers";
import { Header } from "./components/Header";
// import { Settings } from "./components/Settings";

export function OffersPage() {
  // get state from HeaderForm
  const location = useLocation();
  const { city, place } = location.state.options;
  const [options, setOptions] = useState({
    city,
    place,
  });
  const activeOptions = ({ filteredCity, filteredPlace }) => {
    setOptions({ ...options, city: filteredCity, place: filteredPlace });
  };

  return (
    <>
      <Header activeOptions={activeOptions} />
      {/* <Settings /> */}
      <Offers options={options} />
    </>
  );
}
