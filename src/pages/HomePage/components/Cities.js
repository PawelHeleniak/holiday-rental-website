import React from "react";
import { City } from "./City";

// img
import wroclaw from "../../../assets/img/cities/wroclaw.jpg";
import zakopane from "../../../assets/img/cities/zakopane.jpg";
import szczecin from "../../../assets/img/cities/szczecin.jpg";
import gdansk from "../../../assets/img/cities/gdansk.jpg";
import solina from "../../../assets/img/cities/solina.jpg";

export function Cities() {
  const cities = [
    {
      name: "Wrocław",
      city: "wroclaw",
      img: wroclaw,
    },
    {
      name: "Zakopane",
      city: "zakopane",
      img: zakopane,
    },
    {
      name: "Szczecin",
      city: "szczecin",
      img: szczecin,
    },
    {
      name: "Gdańsk",
      city: "gdansk",
      img: gdansk,
    },
    {
      name: "Solina",
      city: "solina",
      img: solina,
    },
  ];
  const city = cities.map((val) => <City data={val} />);
  return (
    <section>
      <div className="wrapper cities">
        <div className="title-section">
          <h2>Miasta</h2>
        </div>
        <div className="information-section">{city}</div>
      </div>
    </section>
  );
}
