import React from "react";
import { Root } from "./MainPageStyles";
import { Board, NavigationMenu } from "modules";

function MainPage() {
  return (
    <Root>
      <NavigationMenu isAuth />
      <Board />
    </Root>
  );
}

export default MainPage;
