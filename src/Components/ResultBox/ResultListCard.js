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

function RecipeListCard({ id, src, alt, recipeName, selectCard }) {
  return (
    <DivCard id={id}>
      <img src={src} alt={alt} width={"200px"} height={"auto"} />
      <h3>{recipeName}</h3>
      <Button
        type={"button"}
        name={"Recipe Details"}
        id={"details"}
        clicked={selectCard}
        color={"var(--color5)"}
        hoverColor={"var(--color2)"}
      />
    </DivCard>
  );
}

export default RecipeListCard;
