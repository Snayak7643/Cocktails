import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { initialCartState } from "./Constants/initialState";
import CartContext from "./Contexts/cartContext";
import CocktailContext from "./Contexts/cocktailContext";
import { useFetchOnSearch } from "./Hooks/useFetchOnSearch";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Cocktail from "./Pages/Cocktail";
import Home from "./Pages/Home";
import { onLoad } from "./Reducers/actions";
import cartReducer from "./Reducers/cartReducer";

function App() {
  const value = useFetchOnSearch();

  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    const setCartState = async () => {
      const item = localStorage.getItem("cartState");
      if (item !== null) {
        const cartState = await JSON.parse(item);
        dispatch(onLoad(cartState));
      }
    };
    setCartState();
  }, []);

  return (
    <CocktailContext.Provider value={value}>
      <CartContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cocktail/:id" element={<Cocktail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </CocktailContext.Provider>
  );
}

export default App;
