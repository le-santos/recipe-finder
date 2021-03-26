import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: var(--color5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  color: var(--color1);
`;

function Header({ customStyle, ...props }) {
  return <HeaderStyled style={customStyle}>{props.children}</HeaderStyled>;
}

export default Header;
