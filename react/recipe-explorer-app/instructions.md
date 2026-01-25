Components to Build

# App

- Holds the main state for the app, including a list of recipes and their “liked” status.

- Passes data and callbacks down to child components.

# RecipeList

- Receives the list of recipes as a prop.

- Renders multiple RecipeCard components.

# RecipeCard

- Receives a single recipe object as a prop.

- Displays recipe name, description, and a list of ingredients.

- Has a “like” button that calls a function passed via props to update the parent state.

- Styles itself differently if the recipe is liked.

- IngredientList (optional for extra practice)

- Receives an array of ingredients as a prop.

- Renders each ingredient as a list item.

# Requirements

- Use functional components only (no class components).

- Use export and import for all components.

- Pass props down the tree: App → RecipeList → RecipeCard → IngredientList.

- Implement event handling: clicking the like button should update the recipe’s “liked” status in App.

- Use conditional rendering/styling for liked vs unliked recipes.

- Map through arrays of recipes and ingredients instead of hardcoding each.

- Maintain unique keys when rendering lists.

# Optional Extensions for Extra Challenge

- Add a filter at the top of App to show only liked recipes.

- Pass a theme prop (like “light” or “dark”) from App down to RecipeCard to change its styling.

- Add a “difficulty level” prop for recipes (easy, medium, hard) and display it with different colors.

- Make the like button a toggle with a star icon that fills when liked.
