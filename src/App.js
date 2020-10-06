import React, { useState } from "react";
import AppHeader from "./Components/UI/AppHeader";
import SearchBox from "./Components/SearchBox/SearchBox";
import BackGroundHome from "./Components/UI/BackgroundHome";
import ResultBox from "./Components/ResultBox/ResultBox";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [requestType, setRequestType] = useState("");
  const [resultVisibility, setResultVisibility] = useState(false);

  const handleInput = (e) => {
    let value = e.target.value;
    setInputValue(value);
  };

  const getSearch = () => {
    if (inputValue.trim()) {
      setSearchValue(inputValue);
      setResultVisibility(true);
      setRequestType("search");
      setInputValue("");
    } else {
      setInputValue("");
    }
  };

  const getRandom = () => {
    setResultVisibility(true);
    setRequestType("random");
    setInputValue("");
  };

  const closeResult = () => {
    setResultVisibility(false);
    setSearchValue("");
  };

  const resultBoxIsOn = resultVisibility && (
    <ResultBox
      searchText={searchValue}
      apiRequestMethod={requestType}
      closeBox={closeResult}
    />
  );

  return (
    <div className="App">
      <AppHeader />
      <SearchBox
        value={inputValue}
        changed={handleInput}
        clickSearch={getSearch}
        clickRandom={getRandom}
      />
      <BackGroundHome />
      {resultBoxIsOn}
    </div>
  );
}

export default App;

/*

  const getRecipes = async (requestType, id) => {
    if (searchValue.trim() === "" && requestType === "search") {
      setSearchValue("");
      return;
    }

    const urlBase = "https://www.themealdb.com/api/json/v1/1/";
    const apiMethod = {
      search: `search.php?s=${searchValue.replace(" ", "_")}`,
      random: "random.php",
      byId: `lookup.php?i=${id}`,
    };

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



  useEffect(() => {
    if (selectedCard[0].idMeal !== undefined) {
      window.addEventListener("keydown", closeSelected);
    }
    return () => {
      window.removeEventListener("keydown", closeSelected); // clean up function in useEffect
    };
  }, [selectedCard]);


    const closeResult = () => {
    setResultVisibility(false);
    setSearchValue("");
    setRecipeList([]);
    setSelectedCard([{ key: null }]);
  };


  const closeSelected = (event) => {
    if (
      event.type === "click" ||
      (event.type === "keydown" && event.key === "Escape")
    ) {
      setSelectedCard([{ key: null }]);
    }
  };


    const pickRecipe = (e) => {
    const recipeCardKey = e.target.parentNode.id;
    getRecipes("byId", recipeCardKey);
  };


*/
