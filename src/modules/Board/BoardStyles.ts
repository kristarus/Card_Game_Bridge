import { COLORS } from "constants/colors";
import styled from "styled-components";

export const Root = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export const BalanceWrapper = styled.div`
  background-color: ${COLORS.WHITE};
  padding: 10px;
  display: flex;
  justify-content: center;
`;

export const CircularProgressWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;
