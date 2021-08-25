import styled from "styled-components";
// import BackSide from "assets/images/BackSide.svg";

interface IRootProps {
  img?: string;
}

export const Root = styled.div<IRootProps>`
  width: 26%;
  padding-top: 39%;
  background-image: url(${({ img }: IRootProps) =>
    img ? `images/${img}.svg` : `images/BackSide.svg`});
  background-size: cover;
`;
