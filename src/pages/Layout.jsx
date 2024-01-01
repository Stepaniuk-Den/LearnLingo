import { Outlet } from "react-router-dom";
import React from "react";
import { StyledContainer } from "./Layout.styled";

const Layout = () => {
  return (
    <StyledContainer>
      <Outlet />
    </StyledContainer>
  );
};

export default Layout;
