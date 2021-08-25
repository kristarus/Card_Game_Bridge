import { Button, NavigationLink } from "components";
import { Root } from "./NavigationMenuStyles";
import { INavigationMenuProps } from "./types";
import { COLORS } from "constants/colors";
import { useStore } from "store/authStore";
import history from "routes/AppHistory";
import { pageRoutes } from "constants/pageRoutes";

function NavigationMenu({ isAuth = false }: INavigationMenuProps) {
  const logOut = useStore((state) => state.logOut);

  const signOut = () => {
    setLocalStoragAuth({ auth: false, balance: 0 });
    logOut();
    history.push(pageRoutes.LOGIN);
  };

  const setLocalStoragAuth = (user: { auth: boolean; balance: number }) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  return isAuth ? (
    <Root>
      <NavigationLink href={pageRoutes.MAIN}>
        <Button
          text="Bridge"
          textcolor={COLORS.LIGHT_BLUE}
          backgroundcolor={COLORS.DARK_BLUE}
          bordercolor={COLORS.DARK_BLUE}
          onClick={() => {}}
        />
      </NavigationLink>
      <Button
        text="Sign Out"
        textcolor={COLORS.LIGHT_BLUE}
        backgroundcolor={COLORS.DARK_BLUE}
        bordercolor={COLORS.DARK_BLUE}
        onClick={signOut}
      />
    </Root>
  ) : (
    <Root>
      <NavigationLink href={pageRoutes.MAIN}>
        <Button
          text="Bridge"
          textcolor={COLORS.LIGHT_BLUE}
          backgroundcolor={COLORS.DARK_BLUE}
          bordercolor={COLORS.DARK_BLUE}
          onClick={() => {}}
        />
      </NavigationLink>
    </Root>
  );
}

export default NavigationMenu;
