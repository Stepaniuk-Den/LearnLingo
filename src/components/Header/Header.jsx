import React from "react";

import {
  StyledHeaderWrapper,
  StyledLogoIcon,
  StyledLogoWrapper,
  StyledNav,
  StyledNavLink,
  StyledNavLinkWrapper,
} from "./Header.styled";
import Auth from "../Auth/Auth";

const Header = () => {
  const isAuth = true;

  return (
    <StyledHeaderWrapper>
      <StyledNav>
        <StyledLogoWrapper to="/">
          <StyledLogoIcon />
          <p>LearnLingo</p>
        </StyledLogoWrapper>
        <StyledNavLinkWrapper>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="teachers">Teachers</StyledNavLink>
          {isAuth && <StyledNavLink to="favorites">Favorites</StyledNavLink>}
        </StyledNavLinkWrapper>
        <Auth />
      </StyledNav>
    </StyledHeaderWrapper>
  );
};

export default Header;
