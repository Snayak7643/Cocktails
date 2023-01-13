import React from "react";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import CocktailList from "./Components/CocktailList";

function App() {
  return (
    <div>
      <Navbar />
      <Search />
      <CocktailList />
    </div>
  );
}

export default App;
