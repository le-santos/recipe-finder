import React, { useState } from "react";
import AppHeader from "./Components/AppHeader";
import SearchBox from "./Components/SearchBox";
import BackGroundHome from "./Components/BackgroundHome";
import ResultBox from "./Components/ResultBox";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [cardSelected, selectCard] = useState([
    { key: "", name: "", thumbnail: "" },
  ]);
  const [recipeInfo, setRecipeInfo] = useState();

  const handleInput = (e) => {
    let value = e.target.value;
    setSearchValue(value);
  };

  const searchRecipes = () => {
    if (searchValue === "") {
      return;
    }

    let list = [];
    console.log("hello");
    setRecipeList(list);
  };

  const getRandomRecipes = () => {
    let list = [];
    console.log("hello");
    setRecipeList(list);
  };

  const pickRecipe = (e) => {
    const recipeCardKey = e.target.parent.key;
  };

  return (
    <div className="App">
      <AppHeader />
      <SearchBox
        value={searchValue}
        changed={handleInput}
        clickSearch={searchRecipes}
        clickRandom={getRandomRecipes}
      />
      <BackGroundHome />
      <ResultBox recipeList={recipeList} cardSelected={pickRecipe} />
    </div>
  );
}

export default App;
