import React from "react";
import "./assets/scss/global.scss";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { OffersPage } from "./pages/OffersPage/OffersPage";

export function App() {
  return (
    <Routes>
      <Route extact path="/holiday-rental-website" element={<HomePage />} />
      <Route path="/offers" element={<OffersPage />} />
    </Routes>
  );
}
