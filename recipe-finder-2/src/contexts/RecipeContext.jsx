/*eslint-disable*/

import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "https://api.edamam.com/api/recipes/v2?type=public";

const APP_ID = "9a987946";
const APP_KEY = "%20d7636149bf6f4e95cd118cbc5d82431a";

const RecipeContext = createContext();

const initialState = {
  recipes: [],
  isLoading: false,
  query: "",
  //   currentRecipe: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "recipes/loaded":
      return { ...state, recipes: action.payload, isLoading: false };

    // case "recipe/loaded":

    case "rejected":
      return { ...state, isLoading: false, error: action.payload };

    case "setQuery":
      return { ...state, query: action.payload };

    default:
      throw new Error("Unknown action type");
  }
}

function RecipeProvider({ children }) {
  const [{ recipes, query, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  async function FetchRecipes(query) {
    dispatch({ type: "setQuery", payload: query });
    dispatch({ type: "loading" });

    try {
      const res = await fetch(
        `${BASE_URL}&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await res.json();
      dispatch({ type: "recipes/loaded", payload: data.hits || [] });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There is an error fetching recipes",
      });
    }
  }

  useEffect(
    function () {
      FetchRecipes(query);
    },
    [query]
  );

  return (
    <RecipeContext.Provider
      value={{ recipes, query, isLoading, error, FetchRecipes }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

function useRecipes() {
  const context = useContext(RecipeContext);
  if (context === undefined)
    throw new Error("RecipeContext was used outside of the RecipeProvider");
  return context;
}

export { RecipeProvider, useRecipes };
