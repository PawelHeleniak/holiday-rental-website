import React from "react";
import { AboutBox } from "./AboutBox";

// img
import about from "../../../assets/img/icon/about.png";
import info from "../../../assets/img/icon/info.png";
import award from "../../../assets/img/icon/award.png";

export function About() {
  const aboutBoxes = [
    {
      img: info,
      title: "Jak działamy?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet rhoncus ligula. Aenean mi nulla, aliquam vitae mollis id, imperdiet in est. Fusce ultricies augue magna, et volutpat augue luctus nec. Curabitur sit amet eleifend orci. Suspendisse rutrum ut diam nec convallis.",
    },
    {
      img: about,
      title: "Dlaczego my?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet rhoncus ligula. Aenean mi nulla, aliquam vitae mollis id, imperdiet in est. Fusce ultricies augue magna, et volutpat augue luctus nec.",
    },
    {
      img: award,
      title: "Gwarancja jakości",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet rhoncus ligula. Aenean mi nulla, aliquam vitae mollis id, imperdiet in est. Fusce ultricies augue magna, et volutpat augue luctus nec.",
    },
  ];
  const aboutBox = aboutBoxes.map((e) => <AboutBox about={e} />);
  return (
    <section>
      <div className="wrapper about">
        <div className="title-section">
          <h2>O nas</h2>
        </div>
        <div className="informationSection">{aboutBox}</div>
      </div>
    </section>
  );
}
