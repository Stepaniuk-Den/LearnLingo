import styled from "styled-components";

import { ReactComponent as MacIcon } from "../../assets/images/logo_mac.svg";

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
