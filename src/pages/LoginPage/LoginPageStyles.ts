import { COLORS } from "constants/colors";
import styled from "styled-components";

export const Root = styled.div`
  min-height: 100vh;
  background-color: ${COLORS.LIGHT_GREY};
`;

export const FormWrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
