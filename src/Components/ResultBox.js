import React from "react";
import styled from "styled-components";
import ResultHeader from "./ResultHeader";
import ResultBody from "./ResultBody";

const DivStyled = styled.div`
  margin: 0em 0.8em;
  background-color: var(--color1);
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 8px;
`;

function ResultBox(props) {
  return (
    <DivStyled>
      <ResultHeader />
      <ResultBody
        recipeList={props.recipeList}
        cardSelected={props.cardSelected}
      />
    </DivStyled>
  );
}

export default ResultBox;
