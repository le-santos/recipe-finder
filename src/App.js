import React, { useState } from "react";
import AppHeader from "./Components/AppHeader";
import SearchBox from "./Components/SearchBox";
import BackGroundHome from "./Components/BackgroundHome";
import ResultBox from "./Components/ResultBox";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [resultVisible, toggleResultView] = useState(false);
  const [cardSelected, selectCard] = useState([{ name: "" }]);
  const [recipeInfo, setRecipeInfo] = useState();

  const handleInput = (e) => {
    let value = e.target.value;
    setSearchValue(value);
  };

  const getRecipes = async (requestType) => {
    if (searchValue === "" && requestType === "search") {
      return;
    }

    let list = [];
    const urlBase = "https://www.themealdb.com/api/json/v1/1/";

    const apiMethod = {
      search: `filter.php?i=${searchValue}`,
      random: "random.php",
      name: `search.php?s=${cardSelected[0].name}`,
    };

    console.log(urlBase + apiMethod[requestType]);

    await fetch(urlBase + apiMethod[requestType])
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
    setSearchValue("");
  };

  const closeResult = () => {
    toggleResultView(false);
    setSearchValue("");
    setRecipeList([]);
    selectCard([{ name: "" }]);
  };

  const pickRecipe = (e) => {
    const recipeCardKey = e.target.parentNode.id;
    console.log(recipeCardKey);

    const selected = recipeList.filter((item) => item.key === recipeCardKey);
    selectCard(selected);
    getRecipes("name");
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
        clickSearch={() => getRecipes("search")}
        clickRandom={() => getRecipes("random")}
      />
      <BackGroundHome />
      {resultBoxIsOn}
    </div>
  );
}

export default App;
