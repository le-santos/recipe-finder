import React from "react";
import styled from "styled-components";

const InputTextStyled = styled.input`
  display: inline-block;
  margin: 1em;
  padding: 0.3em;
  outline: none;
`;

function Input(props) {
  return (
    <React.Fragment>
      <p className={"text-input"} style={{ margin: "0 1em" }}>
        {props.text}
      </p>
      <InputTextStyled
        onChange={props.changed}
        value={props.value}
        id={props.id}
        type={"text"}
        placeholder={"Type 1 ingredient"}
      ></InputTextStyled>
    </React.Fragment>
  );
}

export default Input;
