import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function CloseIcon({ color, size, clicked }) {
  return (
    <FontAwesomeIcon
      icon={faTimes}
      color={color}
      size={size}
      onClick={clicked}
    />
  );
}

export default CloseIcon;
