import { useState } from "react";

export function RecipeCard({ recipe }) {
  const [liked, setLiked] = useState(recipe.liked);

  const handleToggleLiked = () => {
    setLiked(!liked);
  };
  //const ingredientString = recipe.ingredients.join(", ");
  const ingredientString = recipe.ingredients.map((ingredient, i) => {
    return <li key={i}>{ingredient}</li>;
  });
  return (
    <>
      <p>Recipe Name: {recipe.name}</p>
      <p>Description: {recipe.description} </p>
      List of ingredients: <ul>{ingredientString}</ul>
      <button
        onClick={handleToggleLiked}
        style={{ backgroundColor: liked ? "lightgreen" : "lightgrey" }}
      >
        {liked ? "Liked!" : "Like"}
      </button>
    </>
  );
}
