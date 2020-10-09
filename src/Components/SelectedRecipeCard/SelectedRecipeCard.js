import React from "react";
import styled from "styled-components";
import Header from "../UI/Header";
import SelectedRecipeContent from "./SelectedRecipeContent";

const CardStyled = styled.div`
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
        <h3>Recipe Details</h3>
        <SelectedRecipeContent 
          cardSelected={props.cardSelected}
        />
      </CardStyled>
  );
}

export default RecipeCardSelected;
