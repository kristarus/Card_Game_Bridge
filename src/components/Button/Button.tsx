import { COLORS } from "constants/colors";
import { StyledButton } from "./ButtonStyles";
import { IButtonProps } from "./types";

function Button({
  textcolor = "white",
  backgroundcolor = "black",
  bordercolor = "black",
  text,
  onClick,
  onSubmit,
  type = "button",
  disabled = false,
}: IButtonProps) {
  return !disabled ? (
    <StyledButton
      backgroundcolor={backgroundcolor}
      textcolor={textcolor}
      bordercolor={bordercolor}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
    >
      {text}
    </StyledButton>
  ) : (
    <StyledButton
      backgroundcolor={COLORS.LIGHT_BLUE}
      textcolor={COLORS.WHITE}
      bordercolor={COLORS.LIGHT_BLUE}
      disabled
    >
      {text}
    </StyledButton>
  );
}

export default Button;
