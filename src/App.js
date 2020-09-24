import React, { useState } from "react";
import AppHeader from "./Components/AppHeader";
import SearchBox from "./Components/SearchBox";
import BackGroundHome from "./Components/BackgroundHome";
import ResultBox from "./Components/ResultBox";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [resultVisible, toggleResultView] = useState(false);
  const [cardSelected, selectCard] = useState();
  const [recipeInfo, setRecipeInfo] = useState();

  const handleInput = (e) => {
    let value = e.target.value;
    setSearchValue(value);
  };

  const getRecipes = async (e) => {
    const requestType = e.target.id;

    if (searchValue === "" && requestType === "search") {
      return;
    }

    const url =
      requestType === "search"
        ? `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchValue}`
        : `https://www.themealdb.com/api/json/v1/1/random.php`;

    let list = [];

    await fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        list = [
          ...data.meals.map((item) => {
            return {
              key: item.idMeal,
              name: item.strMeal,
              thumbnail: item.strMealThumb,
            };
          }),
        ];
      })
      .catch((error) => console.log(error));
    console.log(list);

    setRecipeList([...list]);
    toggleResultView(true);
    selectCard([]);
    setSearchValue("");
  };

  const closeResult = () => {
    toggleResultView(false);
    setSearchValue("");
    setRecipeList([]);
    selectCard([]);
  };

  const pickRecipe = (e) => {
    const recipeCardKey = e.target.parentNode.id;
    console.log(recipeCardKey);

    const selected = recipeList.filter((item) => item.key === recipeCardKey);
    selectCard(selected);
  };

  const resultBoxIsOn = resultVisible && (
    <ResultBox
      recipeList={recipeList}
      cardSelected={pickRecipe}
      closeResult={closeResult}
    />
  );

  return (
    <div className="App">
      <AppHeader />
      <SearchBox
        value={searchValue}
        changed={handleInput}
        clickSearch={getRecipes}
        clickRandom={getRecipes}
      />
      <BackGroundHome />
      {resultBoxIsOn}
    </div>
  );
}

export default App;
