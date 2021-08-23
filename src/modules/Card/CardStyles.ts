import styled from "styled-components";
import BackSide from "assets/images/BackSide.svg";

interface IRootProps {
  img: string;
}

export const Root = styled.div<IRootProps>`
  width: 20%;
  padding-top: 30%;
  background-image: url(${({ img }: IRootProps) => (img ? img : BackSide)});
  background-size: cover;
`;
