import React from "react";
import styled from "styled-components";

const SpanStyled = styled.span`
  display: block;
  @media (min-width: 600px) {
    display: none;
  }
`;

const MenuMobile = (props) => <SpanStyled>{props.children}</SpanStyled>;

export default MenuMobile;
