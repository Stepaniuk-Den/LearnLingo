import { Outlet } from "react-router-dom";
import React from "react";
import { StyledLayoutContainer } from "./Layout.styled";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <StyledLayoutContainer>
      <Header />
      <Outlet />
    </StyledLayoutContainer>
  );
};

export default Layout;
