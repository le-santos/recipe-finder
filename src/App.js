import React, { useState, Fragment } from "react";
import AppHeader from "./Components/AppHeader";
import SearchBox from "./Components/SearchBox";
import BackGroundHome from "./Components/BackgroundHome";
import ResultBox from "./Components/ResultBox";
import Backdrop from "./Components/Backdrop";
import RecipeCardSelected from "./Components/RecipeCardSelected";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [resultVisible, toggleResultView] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [cardSelected, selectCard] = useState([{ key: null }]);

  const handleInput = (e) => {
    let value = e.target.value;
    setSearchValue(value);
  };

  const getRecipes = async (requestType, id) => {
    if (
      (searchValue === "" || searchValue === " ") &&
      requestType === "search"
    ) {
      return;
    }

    let list = [];
    const urlBase = "https://www.themealdb.com/api/json/v1/1/";
    const apiMethod = {
      search: `filter.php?i=${searchValue}`,
      random: "random.php",
      byId: `lookup.php?i=${id}`,
    };

    await fetch(urlBase + apiMethod[requestType])
      .then((resp) => resp.json())
      .then((data) => {
        list = [
          ...data.meals.map((item) => {
            return {
              key: item.idMeal,
              name: item.strMeal,
              thumbnail: item.strMealThumb,
              instructions: item.strInstructions,
            };
          }),
        ];
      })
      .catch((error) => console.log(error));
    console.log(list);

    if (requestType === "byId") {
      selectCard([...list]);
    } else {
      setRecipeList([...list]);
      toggleResultView(true);
      setSearchValue("");
    }
  };

  const closeResult = () => {
    toggleResultView(false);
    setSearchValue("");
    setRecipeList([]);
    selectCard([{ key: null }]);
  };

  const closeSelected = () => {
    selectCard([{ key: null }]);
  };

  const pickRecipe = (e) => {
    const recipeCardKey = e.target.parentNode.id;
    getRecipes("byId", recipeCardKey);
  };

  const resultBoxIsOn = resultVisible && (
    <ResultBox
      recipeList={recipeList}
      cardSelected={pickRecipe}
      closeResult={closeResult}
    />
  );

  const isCardSelected =
    cardSelected[0].key === null ? null : (
      <Fragment>
        <Backdrop clicked={closeSelected} />
        <RecipeCardSelected
          recipeName={cardSelected[0].name}
          recipeInstructions={cardSelected[0].instructions}
          src={cardSelected[0].thumbnail}
        />
      </Fragment>
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
      {isCardSelected}
    </div>
  );
}

export default App;
