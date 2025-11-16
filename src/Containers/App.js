import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import ResultBody from "../Components/ResultBox/ResultListBody";
import ResultListHeader from "../Components/ResultBox/ResultListHeader";
import SearchBox from "../Components/SearchBox/SearchBox";
import BackGroundHome from "../Components/UI/BackgroundHome";
import ResultBox from "../Components/ResultBox/ResultBox";
import { nanoid } from "nanoid";
import { FavoriteProvider } from "../Context/FavoriteContext";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [searchText, setSearchText] = useState("");
  const [requestMethod, setRequestMethod] = useState("");
  const [searchId, setSearchId] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [recipeDetails, setRecipeDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e) => {
    let value = e.target.value;
    setInputValue(value);
  };

  const getRecipes = () => {
    if (inputValue.trim()) {
      setSearchId(nanoid(12));
      setSearchText(inputValue);
      setRequestMethod("search");
      setIsLoading(true);
    }
    setInputValue("");
  };

  const getRandomRecipes = () => {
    setSearchId(nanoid(12));
    setSearchText("");
    setRequestMethod("random");
    setIsLoading(true);
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
    setIsLoading(true);
  };

  const pickRecipe = (e) => {
    const recipeCardKey = e.target.parentNode.id;
    setSelectedCardId(recipeCardKey);
    setRequestMethod("byId");
    setSearchId(nanoid(12));
    setIsLoading(true);
  };

  const closeResult = () => {
    setInputValue("");
    setSearchText("");
    setRequestMethod("");
    setRecipeList([]);
    setSearchId("");
    setIsLoading(false);
  };

  const shouldShowResultBox =
    requestMethod !== "" || recipeList.length > 0 || isLoading;

  const isResultBoxOn = shouldShowResultBox && (
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
      isLoading={isLoading}
      setIsLoading={setIsLoading}
    >
      <ResultListHeader closeResult={closeResult} />
      <ResultBody
        recipeList={recipeList}
        selectCard={pickRecipe}
        isLoading={isLoading}
      />
    </ResultBox>
  );

  return (
    <FavoriteProvider>
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
    </FavoriteProvider>
  );
}

export default App;
