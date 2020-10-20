import React from "react";
import styled from "styled-components";

const DivBackdropStyled = styled.div`
  display: ${(props) => props.changeDisplay};
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color0);
  opacity: 0.6;
  z-index: ${(props) => props.customZindex};
  height: 100%;
  width: 100vw;
`;

function Backdrop(props) {
  const showBackdrop = () => {
    return props.isBackdropVisible ? "block" : "none";
  };

  return (
    <DivBackdropStyled
      onClick={props.clicked}
      changeDisplay={showBackdrop}
      customZindex={props.customZindex}
    />
  );
}

export default Backdrop;
