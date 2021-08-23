import { NavigationMenu, SignInForm } from "modules";
import { Root, FormWrapper } from "./LoginPageStyles";

function LoginPage() {
  return (
    <Root>
      <NavigationMenu />
      <FormWrapper>
        <SignInForm />
      </FormWrapper>
    </Root>
  );
}

export default LoginPage;
