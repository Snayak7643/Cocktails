import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
import { useFetchWithId } from "../Hooks/useFetchWithId";

const Cocktail = () => {
  const params = useParams();
  const id = params.id === undefined ? "" : params.id;

  const { loading, cocktail } = useFetchWithId(id);

  const { name, category, glass, alcoholic, img, ingredients, instructions } =
    cocktail;

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="section cocktail-section">
      <Link to="/">
        <button className="btn btn-primary">back home</button>
      </Link>
      <h2 className="section-title">Cocktail-Name</h2>
      <div className="drink">
        <img src={img} alt="Cocktail" />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name :</span> {name}
          </p>
          <p>
            <span className="drink-data">Category :</span> {category}
          </p>
          <p>
            <span className="drink-data">Info :</span> {alcoholic}
          </p>
          <p>
            <span className="drink-data">Glass :</span> {glass}
          </p>
          <p>
            <span className="drink-data">Instructons :</span> {instructions}
          </p>
          <p>
            <span className="drink-data">Ingredients :</span>
            {ingredients[0]}, {ingredients[1]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cocktail;
