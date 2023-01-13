import React from "react";
import Navbar from "../Components/Navbar";
import Search from "../Components/Search";
import CocktailList from "../Components/CocktailList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <CocktailList />
    </div>
  );
};

export default Home;
