import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { ALL_URL } from "./Constants/URL";
import About from "./Pages/About";
import Cocktail from "./Pages/Cocktail";
import Home from "./Pages/Home";

function App() {
  const fetchCocktails = async () => {
    try {
      console.log("fetching");
      const response = await fetch(ALL_URL);
      const res = await response.json();
      if (res.drinks) {
        const desiredCocktails = res.drinks.map((drink: any) => {
          const { idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb } =
            drink;
          return {
            id: idDrink,
            name: strDrink,
            alcoholic: strAlcoholic,
            glass: strGlass,
            img: strDrinkThumb,
          };
        });
        console.log(desiredCocktails);
      }
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchCocktails();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail" element={<Cocktail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
