import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Majorcities from "./components/Majorcities";
import Astrology from "./components/Astrologyservices";
import Wedding from "./components/Wedding";
import Gemstones from "./components/pages/Gemstones";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Majorcities />
              <Astrology />
              <Wedding />
            </>
          }
        />

        <Route 
        path="/gemstones" 
        element={<Gemstones />         
        } 
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
