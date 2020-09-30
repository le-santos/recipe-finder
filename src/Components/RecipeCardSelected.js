import React from "react";
import styled from "styled-components";

const CardStyled = styled.div`
  display: block;
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
      <img src={props.src} alt={props.alt} width={"50%"} height={"auto"} />
      <h3>{props.recipeName}</h3>
      <p>{props.recipeInstructions}</p>
    </CardStyled>
  );
}

export default RecipeCardSelected;
