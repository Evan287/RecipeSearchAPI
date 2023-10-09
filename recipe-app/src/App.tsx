import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Recipe from "./components/Recipe";
import { RecipeData } from "./components/Recipe";
//import Recipe from "./components/Recipe";

function App() {
  //should use env variables...
  const APP_ID = "43e2da63";
  const APP_KEY = "411cd7d9b1782216af46200bfffd8100	";

  //STATES
  //const [recipes, setRecipes] = useState([]); //array because data.hits is an array (check with inspect element)
  const [search, setSearch] = useState(""); //state to store user input for search bar, emtpy to begin with
  const [query, setQuery] = useState("steak and potatoes"); //state to store the final query when press search, croissant as default
  const [recipes, setRecipes] = useState<RecipeData[]>([]);

  //EFFECTS
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    ); //change the elements in the query to match ur ID and KEY + query
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits.map((hit: { recipe: RecipeData }) => hit.recipe));
    // setRecipes(data.hits);
  };

  //updating search state with the onChange event target value
  const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //Prevent page resfresh when pressing submit
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <Header />
      <form className="search-form" onSubmit={getSearch}>
        <div className="search-container">
          <input
            className="search-bar"
            type="text"
            placeholder="Enter any dish"
            value={search}
            onChange={updateSearch}
            //Passes the onChange event to updateSearch
            //It needs to be here so it can retrieve input value
          ></input>
          <button className="search-button" type="submit">
            Search
          </button>
        </div>
        <div className="recipe">
          {recipes.map((recipe, index) => (
            <Recipe
              key={index}
              label={recipe.label}
              calories={recipe.calories}
              image={recipe.image}
              ingredients={recipe.ingredients}
            />
          ))}
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default App;
