import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const DivBackground = styled.div`
  background-color: var(--color2);
  width: 100%;
  font-size: 4em;
  text-align: center;
  padding: 1em;
  @media (max-width: 600px) {
    font-size: 2em;
    padding: 1em;
  }
`;

const UtensilsIcon = (
  <FontAwesomeIcon
    icon={faUtensils}
    color={"#fdfdfd"}
    size={"6x"}
    style={{ opacity: "0.2", color: "var(--color5)" }}
  />
);

function BackGroundHome(props) {
  return <DivBackground>{UtensilsIcon}</DivBackground>;
}

export default BackGroundHome;
