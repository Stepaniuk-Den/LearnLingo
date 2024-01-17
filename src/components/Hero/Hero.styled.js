import styled from "styled-components";
import { Link } from "react-router-dom";

export const StartedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 720px;
  padding: 98px 108px 98px 64px;
  background-color: ${({ theme }) => theme.colors.secondBackground};
  border-radius: ${({ theme }) => theme.radius.wrapper};

  & h1 {
    font-family: ${({ theme }) => theme.fonts.semiBold500};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    line-height: 56px; /* 116.667% */
    letter-spacing: -0.96px;
    margin-bottom: 32px;
  }

  & p {
    width: 470px;
    margin-bottom: 64px;
    font-size: ${({ theme }) => theme.fontSizes.m};
    line-height: 22px; /* 137.5% */
    letter-spacing: -0.32px;
  }
`;

export const FocusedSpan = styled.span`
  padding: 0 6px;
  font-family: ${({ theme }) => theme.fonts.regularItalic400};
  background-color: ${({ theme }) => theme.colors.accentSecondColor};
  border-radius: ${({ theme }) => theme.radius.button};
`;

export const StyledNav = styled(Link)`
  display: inline-flex;
  padding: 16px 88px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.accentNormalColor};
  border-radius: ${({ theme }) => theme.radius.button};

  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 28px; /* 155.556% */
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accentThirdColor};
  }
`;
