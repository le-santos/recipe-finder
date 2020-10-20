import React, { useEffect } from "react";
import styled from "styled-components";
import SelectedRecipeContent from "./SelectedRecipeContent";

const CardStyled = styled.div`
  position: fixed;
  height: 75%;
  overflow: auto;
  top: 120px;
  left: 5%;
  right: 5%;
  z-index: 20;
  margin: 1em;
  padding: 2em;
  text-align: left;
  background-color: var(--color2);
  border: none;
  box-shadow: 1px 1px 4px;
  transition: top 0.7s;
`;

function RecipeCardSelected(props) {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".card-selected-styled").style.top = "60px";
    }, 0);
  });

  return (
    <CardStyled className={"card-selected-styled"}>
      <h3>Recipe Details</h3>
      <SelectedRecipeContent cardSelected={props.cardSelected} />
    </CardStyled>
  );
}

export default RecipeCardSelected;
