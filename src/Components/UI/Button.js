import React from "react";
import styled from "styled-components";

const BtnStyled = styled.button`
  padding: 0.5em;
  margin: 4px 2px;
  text-align: center;
  background-color: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
  border-radius: 10px;
  color: #fdfdfd;
  font-size: 0.8em;
  cursor: pointer;
  transition-duration: 0.3s;
  outline: currentColor;
  &:hover {
    background-color: ${(props) => props.hoverColor};
    color: ${(props) => props.color};
  }
  &:active {
    box-shadow: 0px 0px 0px 2px;
    transform: scale(1.04, 1.04);
    transition-duration: 0.1s;
  }
`;

function Button(props) {
  return (
    <BtnStyled
      onClick={props.clicked}
      type={props.type}
      color={props.color}
      hoverColor={props.hoverColor}
      id={props.id}
    >
      {props.name}
      {props.children}
    </BtnStyled>
  );
}

export default Button;
