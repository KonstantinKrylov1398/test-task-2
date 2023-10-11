import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./main.global.css";
import { FooterPage } from "./page/Layout/FooterPage";
import { Layout } from "./page/Layout";
import { ListOfConferences } from "./page/Layout/ListOfConferences";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <ListOfConferences />
              <FooterPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
