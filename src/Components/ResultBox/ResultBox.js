/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, Fragment } from "react";
import styled from "styled-components";
import Backdrop from "../UI/Backdrop";
import SelectedRecipeCard from "../SelectedRecipeCard/SelectedRecipeCard";
import fetchRecipesAPI from "../../services/fetchRecipes";

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
  const fetchRecipes = () =>
    fetchRecipesAPI(
      props.searchText,
      props.apiRequestMethod,
      props.selectedCardId
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        props.apiRequestMethod === "byId"
          ? props.setRecipeDetails(...data.meals)
          : props.setRecipeList([...data.meals]);
      });

  useEffect(() => {
    fetchRecipes();
  }, [props.searchId]);

  useEffect(() => {
    if (props.recipeDetails.idMeal !== undefined) {
      window.addEventListener("keydown", closeSelected);
    }
    return () => {
      window.removeEventListener("keydown", closeSelected); // clean up function in useEffect
    };
  }, [props.recipeDetails]);

  const closeSelected = (event) => {
    if (
      event.type === "click" ||
      (event.type === "keydown" && event.key === "Escape")
    ) {
      props.setSelectedCardId(null);
    }
  };

  const isCardSelected =
    props.selectedCardId === null ? null : (
      <Fragment>
        <Backdrop
          clicked={closeSelected}
          isBackdropVisible={props.selectedCardId}
          customZindex={"10"}
        />
        <SelectedRecipeCard recipeDetails={props.recipeDetails} />
      </Fragment>
    );

  return (
    <DivStyled>
      {isCardSelected}
      {props.children}
    </DivStyled>
  );
}

export default ResultBox;
