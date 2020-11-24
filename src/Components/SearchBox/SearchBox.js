import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Button from "../UI/Button";

const DivSearch = styled.div`
  padding: 0.7em;
  margin-top: 56px;
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
        text={"Search by name"}
        value={props.value}
        onChange={props.onChange}
      />
      <span>
        <Button
          type={"button"}
          name={"Search"}
          id={"search"}
          color={"var(--color4)"}
          hoverColor={"var(--color2)"}
          clicked={props.clickSearch}
        />
        <Button
          type={"button"}
          name={"Give me Ideas!"}
          id={"random"}
          color={"var(--color4)"}
          hoverColor={"var(--color2)"}
          clicked={props.clickRandom}
        />
      </span>
    </DivSearch>
  );
}

export default SearchBox;
