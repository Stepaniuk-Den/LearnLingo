import styled from "styled-components";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

export const StyledAuthWrapper = styled.div`
  display: flex;
`;

export const StyledCiLogout = styled(CiLogout)`
  width: 24px;
  height: 24px;
  stroke: ${({ theme }) => theme.colors.white};
`;
