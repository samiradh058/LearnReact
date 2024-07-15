import { useState } from "react";
import { useRecipes } from "../contexts/RecipeContext";

function Recipe() {
  const [query, setQuery] = useState("");
  const { recipes, FetchRecipes } = useRecipes();
  console.log(recipes);

  function handleSubmit(e) {
    e.preventDefault();
    FetchRecipes(query);
  }

  return (
    <div>
      {recipes.length > 0
        ? recipes.map((recipe, index) => (
            <h1 key={index}>{recipe.recipe.label}</h1>
          ))
        : "Type name of dish"}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a recipe..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Recipe;
