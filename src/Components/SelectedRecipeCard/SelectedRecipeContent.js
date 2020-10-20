import React from "react";
import styled from "styled-components";
import IngredientsTable from "./IngredientsTable";

const CardContentDiv = styled.div`
  display: grid;
  gap: 1em;
  justify-items: center;
  background-color: var(--color1);
  padding: 2em;
  margin-top: 1em;
  border-radius: 10px;
`;

function SelectedRecipeContent(props) {
  return (
    <CardContentDiv>
      <img
        src={props.cardSelected.strMealThumb}
        alt={`${props.cardSelected.strMeal}-recipe`}
        width={"50%"}
        height={"auto"}
      />
      <h3>{props.cardSelected.strMeal}</h3>
      <p>{props.cardSelected.strInstructions}</p>
      <IngredientsTable recipeSelected={props.cardSelected} />
    </CardContentDiv>
  );
}

export default SelectedRecipeContent;
