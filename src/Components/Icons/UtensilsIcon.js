import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

function UtensilsIcon(props) {
  return <FontAwesomeIcon icon={faUtensils} color={props.color} size={props.size} />
};

export default UtensilsIcon;