import React, { useContext } from "react";
import CocktailContext from "../Contexts/cocktailContext";

const Search = () => {
  const { searchTerm, handleChange } = useContext(CocktailContext);

  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label>search your favorite cocktail</label>
          <input type="text" value={searchTerm} onChange={handleChange} />
        </div>
      </form>
    </section>
  );
};

export default Search;
