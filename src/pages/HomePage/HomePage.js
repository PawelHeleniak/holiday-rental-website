import React from "react";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Cities } from "./components/Cities";

export function HomePage() {
  return (
    <>
      <Header />
      <Cities />
      <About />
    </>
  );
}
