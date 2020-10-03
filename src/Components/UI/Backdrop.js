import React from "react";
import styled from "styled-components";

const DivBackdropStyled = styled.div`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: var(--color5);
  opacity: 0.6;
  z-index: 10;
  height: 100%;
  width: 100vw;
`;

function Backdrop(props) {
  return <DivBackdropStyled onClick={props.clicked} />;
}

export default Backdrop;
