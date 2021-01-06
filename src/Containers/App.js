import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import ResultBody from "../Components/ResultBox/ResultListBody";
import ResultListHeader from "../Components/ResultBox/ResultListHeader";
import SearchBox from "../Components/SearchBox/SearchBox";
import BackGroundHome from "../Components/UI/BackgroundHome";
import ResultBox from "../Components/ResultBox/ResultBox";
import { nanoid } from "nanoid";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [resultVisibility, setResultVisibility] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [requestMethod, setRequestMethod] = useState("");
  const [searchId, setSearchId] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [recipeDetails, setRecipeDetails] = useState({});

  const handleInput = (e) => {
    let value = e.target.value;
    setInputValue(value);
  };

  const getRecipes = () => {
    if (inputValue.trim()) {
      setSearchId(nanoid(12));
      setSearchText(inputValue);
      setRequestMethod("search");
      setResultVisibility(true);
    }
    setInputValue("");
  };

  const getRandomRecipes = () => {
    setSearchId(nanoid(12));
    setSearchText("");
    setRequestMethod("random");
    setResultVisibility(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      getRecipes();
    }
  };

  const getCategoryRecipes = (category) => {
    setSearchId(nanoid(12));
    setSearchText(category);
    setRequestMethod("byCategory");
    setResultVisibility(true);
  };

  const pickRecipe = (e) => {
    const recipeCardKey = e.target.parentNode.id;
    setSelectedCardId(recipeCardKey);
    setRequestMethod("byId");
    setSearchId(nanoid(12));
  };

  const closeResult = () => {
    setResultVisibility(false);
    setInputValue("");
    setSearchText("");
    setRequestMethod("");
    setRecipeList([]);
    setSearchId("");
  };

  const isResultBoxOn = resultVisibility && (
    <ResultBox
      searchText={searchText}
      apiRequestMethod={requestMethod}
      selectedCardId={selectedCardId}
      searchId={searchId}
      recipeList={recipeList}
      setRecipeList={setRecipeList}
      setSelectedCardId={setSelectedCardId}
      recipeDetails={recipeDetails}
      setRecipeDetails={setRecipeDetails}
    >
      <ResultListHeader closeResult={closeResult} />
      <ResultBody recipeList={recipeList} selectCard={pickRecipe} />
    </ResultBox>
  );

  return (
    <Layout className="App" searchByCategory={getCategoryRecipes}>
      <SearchBox
        value={inputValue}
        onChange={handleInput}
        clickSearch={getRecipes}
        clickRandom={getRandomRecipes}
        onKeyDown={handleKeyDown}
      />
      <BackGroundHome />
      {isResultBoxOn}
    </Layout>
  );
}

export default App;
