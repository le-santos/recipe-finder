import React from "react";
import styled from "styled-components";
import IngredientsTable from "./IngredientsTable";

const CardStyled = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  height: 75%;
  overflow: auto;
  top: 60px;
  left: 5%;
  right: 5%;
  z-index: 20;
  margin: 1em;
  padding: 1em;
  text-align: left;
  background-color: var(--color2);
  border: none;
  border-radius: 10px;
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
