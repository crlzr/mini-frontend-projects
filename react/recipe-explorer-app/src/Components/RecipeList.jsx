import { RecipeCard } from "./RecipeCard";

// export function RecipeList({ recipes }) {
//   const recipeCards = recipes.map(() => {
//     <RecipeCard recipe={recipes} />;
//   });
//   return <>
//   {recipeCards}
//   </>;
// }

export function RecipeList({ recipes }) {
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} theme={theme} />
      ))}
    </>
  );
}
