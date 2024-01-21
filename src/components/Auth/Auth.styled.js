import styled from "styled-components";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

export const StyledAuthWrapper = styled.div`
  display: flex;
`;

export const StyledCiLogout = styled(CiLogout)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const StyledCiLogin = styled(CiLogin)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  color: ${({ theme }) => theme.colors.accentNormalColor};
`;
