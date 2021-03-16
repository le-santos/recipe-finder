import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

function UtensilsIcon({ color, size }) {
  return <FontAwesomeIcon icon={faUtensils} color={color} size={size} />;
}

export default UtensilsIcon;
