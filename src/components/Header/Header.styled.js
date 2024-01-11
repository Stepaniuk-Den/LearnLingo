import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/images/ukraine.svg";

export const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: clamp(320px, 100%, 1184px);
  margin: 20px auto;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: var(--text-color-100);
`;

export const StyledLogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    font-family: Roboto500;
    font-size: 20px;
    letter-spacing: -0.4px;
  }
`;

export const StyledLogoIcon = styled(LogoIcon)`
  width: 28px;
  height: 28px;
`;

export const StyledNavLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  /* font-family: Roboto400; */
`;

export const StyledNavLink = styled(NavLink)`
  /* display: flex;
  align-items: center; */
  /* font-family: Roboto400; */
  font-size: 16px;
  line-height: 1.25;
`;
