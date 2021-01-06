import React from "react";
import styled from "styled-components";

const InputTextStyled = styled.input`
  display: inline-block;
  margin: 1em;
  padding: 0.3em;
  outline: none;
`;

function Input({
  label,
  value,
  id,
  type,
  placeholder,
  onChange,
  onKeyDown,
  ...props
}) {
  return (
    <React.Fragment>
      <p className={"text-input"} style={{ margin: "0 1em" }}>
        {props.label}
      </p>
      <InputTextStyled
        onChange={onChange}
        value={value}
        id={id}
        type={"text"}
        placeholder={"ex: chicken, salmon, pie "}
        onKeyDown={onKeyDown}
      ></InputTextStyled>
    </React.Fragment>
  );
}

export default Input;
