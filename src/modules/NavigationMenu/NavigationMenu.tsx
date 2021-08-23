import { Button } from "components";
import { Root } from "./NavigationMenuStyles";
import { INavigationMenuProps } from "./types";
import { COLORS } from "constants/colors";

function NavigationMenu({ isAuth = false }: INavigationMenuProps) {
  return isAuth ? (
    <Root>
      <Button
        text="Bridge"
        textcolor={COLORS.LIGHT_BLUE}
        backgroundcolor={COLORS.DARK_BLUE}
        bordercolor={COLORS.DARK_BLUE}
        onClick={() => {}}
      />
      <Button
        text="Sign Out"
        textcolor={COLORS.LIGHT_BLUE}
        backgroundcolor={COLORS.DARK_BLUE}
        bordercolor={COLORS.DARK_BLUE}
        onClick={() => {}}
      />
    </Root>
  ) : (
    <Root>
      <Button
        text="Bridge"
        textcolor={COLORS.LIGHT_BLUE}
        backgroundcolor={COLORS.DARK_BLUE}
        bordercolor={COLORS.DARK_BLUE}
        onClick={() => {}}
      />
    </Root>
  );
}

export default NavigationMenu;
