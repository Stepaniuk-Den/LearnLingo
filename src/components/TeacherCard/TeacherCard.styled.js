import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  display: flex;
  width: 1184px;
  padding: 24px;
  align-items: flex-start;
  gap: 48px;
  border-radius: ${({ theme }) => theme.radius.card};
  outline: 1px solid red;
`;

export const ImageTeacherWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;

  background-color: ${({ theme }) => theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.avatarFrameColor};
  border-radius: ${({ theme }) => theme.radius.round};
  & img {
    position: relative;
    width: 96px;
    height: 96px;
    padding: 12px;

    background-color: ${({ theme }) => theme.colors.avatarFrameColor};
    border-radius: ${({ theme }) => theme.radius.round};
  }
`;

export const StyledIsOnline = styled.div`
  position: absolute;
  display: flex;
  width: 12px;
  height: 12px;
  top: 19px;
  right: 16px;

  background-color: ${({ theme }) => theme.colors.green};
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.round};
`;
