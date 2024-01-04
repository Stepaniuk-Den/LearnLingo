import React from "react";

import {
  StyledHeaderWrapper,
  StyledLogoIcon,
  StyledLogoWrapper,
  StyledNav,
  StyledNavLink,
  StyledNavLinkWrapper,
} from "./Header.styled";

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
      </StyledNav>
    </StyledHeaderWrapper>
  );
};

export default Header;
