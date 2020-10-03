import React from "react";
import styled from "styled-components";
import IngredientsTable from "./IngredientsTable";

const CardStyled = styled.div`
  display: grid;
  gap: 1em;
  justify-items: center;
  position: fixed;
  height: 75%;
  overflow: auto;
  top: 60px;
  left: 5%;
  right: 5%;
  z-index: 20;
  margin: 1em;
  padding: 2em;
  text-align: left;
  background-color: var(--color2);
  border: none;
  box-shadow: 1px 1px 4px;
`;

function RecipeCardSelected(props) {
  return (
    <CardStyled>
      <img
        src={props.cardSelected.strMealThumb}
        alt={`${props.cardSelected.strMeal}-recipe`}
        width={"50%"}
        height={"auto"}
      />
      <h3>{props.cardSelected.strMeal}</h3>
      <p>{props.cardSelected.strInstructions}</p>
      <IngredientsTable recipeSelected={props.cardSelected} />
    </CardStyled>
  );
}

export default RecipeCardSelected;
