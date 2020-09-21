import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";

const DivSearch = styled.div`
  padding: 0.7em;
  background-color: var(--color2);
  text-align: center;
  font-size: 1.2em;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    display: flex;
    flex-flow: column wrap;
  }
`;

function SearchBox(props) {
  return (
    <DivSearch>
      <Input
        text={"Search by main ingredient"}
        value={props.value}
        changed={props.changed}
      />
      <span>
        <Button
          type={"button"}
          name={"Search"}
          id={"search-btn"}
          color={"var(--color4)"}
          hoverColor={"var(--color2)"}
          clicked={props.clickSearch}
        />
        <Button
          type={"button"}
          name={"Give me Ideas!"}
          id={"random-btn"}
          color={"var(--color4)"}
          hoverColor={"var(--color2)"}
          clicked={props.clickRandom}
        />
      </span>
    </DivSearch>
  );
}

export default SearchBox;
