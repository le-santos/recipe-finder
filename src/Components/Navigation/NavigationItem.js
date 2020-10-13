import React from "react";
import styled from "styled-components";

const LinkStyled = styled.a`
  padding: 1em 0.5em;
  color: var(--color0);
`

function NavigationItem(props) {
  return (
    <LinkStyled
      onClick={props.clicked}
    >
      {props.text}
    </LinkStyled>
  )
}

export default NavigationItem;