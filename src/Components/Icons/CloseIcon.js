import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function CloseIcon(props) {
  return <FontAwesomeIcon 
    icon={faTimes}
    color={props.color} 
    size={props.size} 
    onClick={props.clicked} 
    />
}

export default CloseIcon;
