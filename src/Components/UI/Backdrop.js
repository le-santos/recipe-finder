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

function Backdrop({ clicked, isBackdropVisible, customZindex }) {
  const showBackdrop = () => {
    return isBackdropVisible ? "block" : "none";
  };

  return (
    <DivBackdropStyled
      onClick={clicked}
      changeDisplay={showBackdrop}
      customZindex={customZindex}
    />
  );
}

export default Backdrop;
