import React from "react";
import "./Button.css";

const Button = (props) => {
  const { currentColor, handleClick } = props;
  //component props color
  return (
    <button className={currentColor} onClick={handleClick}>
      Subscribe !
    </button>
  );
};

export default Button;
