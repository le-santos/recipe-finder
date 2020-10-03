import React from "react";
import styled from "styled-components";

const DivStyled = styled.div`
  background-color: var(--color5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  color: var(--color1);
`;

function Header(props) {
  return <DivStyled style={props.customStyle}>{props.children}</DivStyled>;
}

export default Header;
