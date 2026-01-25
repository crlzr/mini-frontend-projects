import { recipes } from "./recipes";
import "./App.css";
import { RecipeList } from "./Components/Recipelist";
import { useState } from "react";
import { Theme } from "./Components/Theme";

function App() {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className={theme}>
        <Theme setTheme={handleTheme} />
        <RecipeList recipes={recipes} />
      </div>
    </>
  );
}

export default App;
