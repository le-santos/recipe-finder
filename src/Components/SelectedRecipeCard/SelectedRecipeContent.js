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

function SelectedRecipeContent({ recipeDetails }) {
  return (
    <CardContentDiv>
      <img
        src={recipeDetails.strMealThumb}
        alt={`${recipeDetails.strMeal}-recipe`}
        width={"50%"}
        height={"auto"}
      />
      <h3>{recipeDetails.strMeal}</h3>
      <p>{recipeDetails.strInstructions}</p>
      <IngredientsTable recipeSelected={recipeDetails} />
    </CardContentDiv>
  );
}

export default SelectedRecipeContent;
