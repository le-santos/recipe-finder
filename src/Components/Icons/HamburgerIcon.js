import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const customStyle = {
  cursor: "pointer",
};

function HamburguerIcon(props) {
  return (
    <span style={customStyle}>
      <FontAwesomeIcon
        icon={faBars}
        color={props.color}
        size={props.size}
        onClick={props.clicked}
      />
    </span>
  );
}

export default HamburguerIcon;
