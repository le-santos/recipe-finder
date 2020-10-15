import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import ResultListHeader from "../Components/ResultList/ResultListHeader";
import ResultBody from "../Components/ResultList/ResultListBody";
import Backdrop from "../Components/UI/Backdrop";
import SelectedRecipeCard from "../Components/SelectedRecipeCard/SelectedRecipeCard";

const DivStyled = styled.div`
  margin: 0em 0.8em;
  background-color: var(--color1);
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 8px;
  position: relative;
  top: -500px;
  z-index: 10;
  @media (max-width: 680px) {
    position: relative;
    top: -250px;
  }
`;

function ResultBox(props) {
  const [recipeList, setRecipeList] = useState([]);
  const [selectedCard, setSelectedCard] = useState([{ key: null }]);

  useEffect(() => {
    getRecipes(props.searchText, props.apiRequestMethod);
  }, [props.apiRequestMethod, props.searchText, props.searchId]);

  useEffect(() => {
    if (selectedCard[0].idMeal !== undefined) {
      window.addEventListener("keydown", closeSelected);
    }
    return () => {
      window.removeEventListener("keydown", closeSelected); // clean up function in useEffect
    };
  }, [selectedCard]);

  const getRecipes = (searchQuery, requestType, recipeId) => {
    const urlBase = "https://www.themealdb.com/api/json/v1/1/";
    const apiMethod = {
      search: `search.php?s=${searchQuery.replace(" ", "_")}`,
      random: "random.php",
      byId: `lookup.php?i=${recipeId}`,
    };

    fetch(urlBase + apiMethod[requestType])
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.meals) {
          setRecipeList(null);
        } else if (requestType === "byId") {
          setSelectedCard([...data.meals]);
        } else {
          setRecipeList([...data.meals]);
        }
      })
      .catch((error) => console.log(error));
  };

  const closeResult = () => {
    setRecipeList([]);
    setSelectedCard([{ key: null }]);
    props.closeBox();
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
    console.log(recipeCardKey);
    getRecipes("", "byId", recipeCardKey);
  };

  const isCardSelected =
    selectedCard[0].key === null ? null : (
      <Fragment>
        <Backdrop 
          clicked={closeSelected} 
          isBackdropVisible={selectedCard[0]}
          customZindex={"10"}/>
        <SelectedRecipeCard cardSelected={selectedCard[0]} />
      </Fragment>
    );

  return (
    <DivStyled>
      <ResultListHeader closeResult={closeResult} />
      <ResultBody recipeList={recipeList} selectCard={pickRecipe} />
      {isCardSelected}
    </DivStyled>
  );
}

export default ResultBox;
