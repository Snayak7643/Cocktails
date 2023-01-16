import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import CocktailContext from "./Contexts/cocktailContext";
import { useFetchOnSearch } from "./Hooks/useFetchOnSearch";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Cocktail from "./Pages/Cocktail";
import Home from "./Pages/Home";

function App() {
  const value = useFetchOnSearch();
  return (
    <CocktailContext.Provider value={value}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cocktail/:id" element={<Cocktail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CocktailContext.Provider>
  );
}

export default App;
