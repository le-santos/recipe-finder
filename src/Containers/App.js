import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import SearchBox from "../Components/SearchBox/SearchBox";
import BackGroundHome from "../Components/UI/BackgroundHome";
import ResultBox from "./ResultBox";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [resultVisibility, setResultVisibility] = useState(false);
  const [searchInfo, setSearchInfo] = useState(["", ""]);
  const [searchId, setSearchId] = useState("");

  const handleInput = (e) => {
    let value = e.target.value;
    setInputValue(value);
  };

  const getRecipes = () => {
    if (inputValue.trim()) {
      setResultVisibility(true);
      setSearchInfo([inputValue, "search"]);
      setInputValue("");
    } else {
      setInputValue("");
    }
  };

  const getRandomRecipes = () => {
    setSearchId(Math.random().toFixed(8).toString());
    setSearchInfo(["", "random"]);
    setResultVisibility(true);
  };

  const getCategoryRecipes = (category) => {
    setSearchInfo([category, "byCategory"]);
    setResultVisibility(true);
  };

  const closeResult = () => {
    setResultVisibility(false);
    setInputValue("");
    setSearchInfo(["", ""]);
    setSearchId("");
  };

  const isResultBoxOn = props.resultVisible && (
    <ResultBox
      searchText={searchInfo[0]}
      apiRequestMethod={searchInfo[1]}
      closeBox={closeResult}
      searchId={searchId}
      recipeList={recipeList}
      setRecipeList={setRecipeList}
      selectedCard={selectedCard}
      setSelectedCard={setSelectedCard}
    />

  return (
    <Layout
      className="App"
      searchByCategory={getCategoryRecipes}
    >
      <SearchBox
        value={inputValue}
        changed={handleInput}
        clickSearch={getRecipes}
        clickRandom={getRandomRecipes}
      />
      <BackGroundHome />
      {isResultBoxOn}
    </Layout>
  );
}

export default App;
