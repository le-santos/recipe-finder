import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const customStyle = {
  cursor: "pointer",
};

function HamburguerIcon({ color, size, clicked }) {
  return (
    <span style={customStyle}>
      <FontAwesomeIcon
        icon={faBars}
        color={color}
        size={size}
        onClick={clicked}
      />
    </span>
  );
}

export default HamburguerIcon;
