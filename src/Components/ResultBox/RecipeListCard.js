import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const DivCard = styled.div`
  margin: 1em;
  padding: 0.7em;
  max-width: min-content;
  background-color: var(--color2);
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 4px 1px;
`;

function RecipeListCard(props) {
  return (
    <DivCard id={props.id}>
      <img src={props.src} alt={props.alt} width={"200px"} height={"auto"} />
      <h3>{props.recipeName}</h3>
      <Button
        type={"button"}
        name={"Recipe Details"}
        id={"details"}
        clicked={props.selectCard}
        color={"var(--color5)"}
        hoverColor={"var(--color2)"}
      />
    </DivCard>
  );
}

export default RecipeListCard;
