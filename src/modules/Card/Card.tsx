import { Root } from "./CardStyles";
import { ICardProps } from "./types";

function Card({ type }: ICardProps) {
  return type ? <Root img={type}></Root> : <Root img=""></Root>;
}

export default Card;
