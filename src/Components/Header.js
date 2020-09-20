import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUtensils } from "@fortawesome/free-solid-svg-icons";

const DivStyled = styled.div`
  --color1: #fdfdfd;
  --color5: #403268;
  background-color: var(--color5);
  display: flex;
  justify-content: space-between;
  padding: 0.5em;
  font-weight: 900;
  font-size: 1.3em;
  color: var(--color1);
`;

const BarsIcon = (
  <FontAwesomeIcon icon={faBars} color={"#fdfdfd"} size={"lg"} />
);
const UtensilsIcon = (
  <FontAwesomeIcon icon={faUtensils} color={"#fdfdfd"} size={"lg"} />
);

function Header(props) {
  return (
    <DivStyled>
      {BarsIcon}
      <h2>Recipe Finder App</h2>
      {UtensilsIcon}
    </DivStyled>
  );
}

export default Header;
