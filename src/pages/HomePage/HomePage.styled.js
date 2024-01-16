import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as MacIcon } from "../../assets/images/logo_mac.svg";

export const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
`;
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
export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 568px;
  height: 530px;
  background-color: ${({ theme }) => theme.colors.accentSecondColor};
  border-radius: ${({ theme }) => theme.radius.wrapper};
  & img {
    position: relative;
    margin-top: 64px;
    width: 339px;
    height: 339px;
  }
`;

export const FocusedSpan = styled.span`
  padding: 0 6px;
  font-family: ${({ theme }) => theme.fonts.regularItalic400};
  background-color: ${({ theme }) => theme.colors.accentSecondColor};
  border-radius: ${({ theme }) => theme.radius.button};
`;

export const NotebookWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 360px;
  height: 190px;
  background: linear-gradient(180deg, #eeb055 0%, #d08f38 100%);
  border-radius: 8px 8px 0 0;
`;

export const StyledMacIcon = styled(MacIcon)`
  width: 46px;
  height: 56px;
  align-self: center;
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
