import React from "react";
import { StyledAuthWrapper, StyledCiLogout } from "./Auth.styled";
import Button from "../../shared/components/Button/Button";

const Auth = () => {
  const isAuth = true;
  return (
    <StyledAuthWrapper>
      {isAuth ? (
        <Button
          text="Logout"
          variant="Logout"
          icon={<StyledCiLogout />}
        ></Button>
      ) : (
        <>
          <Button text="Login" variant="Login" />
          <Button text="Registration" variant="Registration" />
        </>
      )}
    </StyledAuthWrapper>
  );
};

export default Auth;
