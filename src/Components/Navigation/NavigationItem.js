import React from "react";
import styled from "styled-components";

const LinkStyled = styled.a`
  padding: 0.5em 1em;
  color: var(--color0);
  &:hover {
    color: var(--color1);
    background-color: var(--color5);
    cursor: pointer;
  }
`;

function NavigationItem(props) {
  return <LinkStyled onClick={props.clicked}>{props.text}</LinkStyled>;
}

export default NavigationItem;
