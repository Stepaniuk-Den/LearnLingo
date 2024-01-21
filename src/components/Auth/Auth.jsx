import React from "react";
import {
  StyledAuthWrapper,
  StyledCiLogin,
  StyledCiLogout,
} from "./Auth.styled";
import Button from "../../shared/components/Button/Button";

const Auth = () => {
  const isAuth = true;
  return (
    <StyledAuthWrapper>
      {!isAuth ? (
        <Button
          text="Logout"
          variant="Logout"
          icon={<StyledCiLogout />}
        ></Button>
      ) : (
        <>
          <Button text="Login" variant="Login" icon={<StyledCiLogin />} />
          <Button text="Registration" variant="Registration" />
        </>
      )}
    </StyledAuthWrapper>
  );
};

export default Auth;
