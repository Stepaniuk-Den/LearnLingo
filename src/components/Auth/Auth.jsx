import React from "react";
import { StyledAuthWrapper } from "./Auth.styled";
import Button from "../../shared/components/Button/Button";

const Auth = () => {
  return (
    <StyledAuthWrapper>
      <Button text="Registration" variant="Registration" />
    </StyledAuthWrapper>
  );
};

export default Auth;
