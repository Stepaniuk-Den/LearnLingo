import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 39px;

  color: ${({ theme }) => theme.colors.primaryFont};
  background-color: ${({ theme }) => theme.colors.accentNormalColor};
  border: 1px solid ${({ theme }) => theme.colors.accentNormalColor};
  border-radius: ${({ theme }) => theme.radius.button};

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSizes.s16};
  line-height: 20px;

  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accentThirdColor};
    border: 1px solid ${({ theme }) => theme.colors.accentThirdColor};
    border-radius: ${({ theme }) => theme.radius.button};
    color: ${({ theme }) => theme.colors.primaryFont};
  }

  ${({ $variant }) =>
    $variant === "Registration" &&
    css`
      color: ${({ theme }) => theme.colors.secondaryFont};
      background-color: ${({ theme }) => theme.colors.primaryFont};
      border: 1px solid ${({ theme }) => theme.colors.primaryFont};
    `}
`;
