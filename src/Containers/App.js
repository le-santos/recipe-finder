import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import ResultBody from "../Components/ResultList/ResultListBody";
import ResultListHeader from "../Components/ResultList/ResultListHeader";
import SearchBox from "../Components/SearchBox/SearchBox";
import BackGroundHome from "../Components/UI/BackgroundHome";
import ResultBox from "./ResultBox";

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
      setSearchId(Math.random().toFixed(8).toString());
      setSearchText(inputValue);
      setRequestMethod("search");
      setResultVisibility(true);
    }
    setInputValue("");
  };

  const getRandomRecipes = () => {
    setSearchId(Math.random().toFixed(8).toString());
    setSearchText("");
    setRequestMethod("random");
    setResultVisibility(true);
  };

  const getCategoryRecipes = (category) => {
    setSearchId(Math.random().toFixed(8).toString());
    setSearchText(category);
    setRequestMethod("byCategory");
    setResultVisibility(true);
  };

  const pickRecipe = (e) => {
    const recipeCardKey = e.target.parentNode.id;
    setSelectedCardId(recipeCardKey);
    setRequestMethod("byId");
    setSearchId(Math.random().toFixed(8).toString());
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
