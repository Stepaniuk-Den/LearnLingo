import React from "react";
import { StyledButton } from "./Button.styled";

const Button = ({ onClick = null, icon, text, type = "button", variant }) => {
  return (
    <StyledButton type={type} onClick={onClick} $variant={variant}>
      {icon && <span className="icon">{icon}</span>}
      {text}
    </StyledButton>
  );
};

export default Button;
