import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { ALL_URL } from "./Constants/URL";
import CocktailContext from "./Contexts/cocktailContext";
import About from "./Pages/About";
import Cocktail from "./Pages/Cocktail";
import Home from "./Pages/Home";
import { cocktailType } from "./Type";

function App() {
  const [searchTerm, setSearchterm] = useState<any>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [cocktails, setCocktails] = useState<cocktailType[]>([]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchterm(event.target.value);
  };

  const fetchCocktails = async () => {
    setLoading(true);
    try {
      console.log("fetching");
      const response = await fetch(ALL_URL + searchTerm);
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
        setCocktails(desiredCocktails);
        setLoading(false);
        return;
      }
      setCocktails([]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  };
  useEffect(() => {
    fetchCocktails();
  }, [searchTerm]);

  return (
    <CocktailContext.Provider
      value={{ cocktails, loading, searchTerm, handleChange }}
    >
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
