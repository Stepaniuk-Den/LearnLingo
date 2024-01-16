import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 1310px;
  gap: 100px;
  padding: 40px 0;
  justify-content: center;
  align-items: center;
  border: 1.5px dashed ${({ theme }) => theme.colors.accentNormalColor};
  border-radius: ${({ theme }) => theme.radius.wrapper};
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const StyledCount = styled.p`
  font-family: ${({ theme }) => theme.fonts.semiBold500};
  font-size: ${({ theme }) => theme.fontSizes.l};
  line-height: 32px; /* 114.286% */
  letter-spacing: -0.56px;
`;

export const StyledDescription = styled.p`
  width: 96px;
  font-family: ${({ theme }) => theme.fonts.regular400};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;
`;
