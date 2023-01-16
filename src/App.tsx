import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import CocktailContext from "./Contexts/cocktailContext";
import { useFetchOnSearch } from "./Hooks/useFetchOnSearch";
import About from "./Pages/About";
import Cocktail from "./Pages/Cocktail";
import Home from "./Pages/Home";

function App() {
  const value = useFetchOnSearch();
  //value
  return (
    <CocktailContext.Provider value={value}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cocktail/:id" element={<Cocktail />} />
        </Routes>
      </BrowserRouter>
    </CocktailContext.Provider>
  );
}

export default App;
