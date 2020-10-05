import React, { useState, Fragment } from "react";
import AppHeader from "./Components/UI/AppHeader";
import SearchBox from "./Components/SearchBox/SearchBox";
import BackGroundHome from "./Components/UI/BackgroundHome";
import ResultBox from "./Components/ResultBox/ResultBox";
import Backdrop from "./Components/UI/Backdrop";
import RecipeCardSelected from "./Components/SelectedRecipeCard/RecipeCardSelected";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [resultVisibility, setResultVisibility] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [selectedCard, setSelectedCard] = useState([{ key: null }]);

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

    const urlBase = "https://www.themealdb.com/api/json/v1/1/";
    const apiMethod = {
      search: `search.php?s=${searchValue.replace(" ", "_")}`,
      random: "random.php",
      byId: `lookup.php?i=${id}`,
    };

    console.log(apiMethod);
    await fetch(urlBase + apiMethod[requestType])
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.meals) {
          setRecipeList(null);
          setResultVisibility(true);
          setSearchValue("");
        } else if (requestType === "byId") {
          setSelectedCard([...data.meals]);
        } else {
          setRecipeList([...data.meals]);
          setResultVisibility(true);
          setSearchValue("");
        }
      })
      .catch((error) => console.log(error));
  };

  const closeResult = () => {
    setResultVisibility(false);
    setSearchValue("");
    setRecipeList([]);
    setSelectedCard([{ key: null }]);
  };

  const closeSelected = () => {
    setSelectedCard([{ key: null }]);
  };

  const pickRecipe = (e) => {
    const recipeCardKey = e.target.parentNode.id;
    getRecipes("byId", recipeCardKey);
  };

  const resultBoxIsOn = resultVisibility && (
    <ResultBox
      recipeList={recipeList}
      cardSelected={pickRecipe}
      closeResult={closeResult}
    />
  );

  const isCardSelected =
    selectedCard[0].key === null ? null : (
      <Fragment>
        <Backdrop clicked={closeSelected} />
        <RecipeCardSelected cardSelected={selectedCard[0]} />
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
