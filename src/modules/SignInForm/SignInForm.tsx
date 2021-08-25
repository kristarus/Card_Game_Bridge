import { useState, useEffect } from "react";
import { Input, Text, Button } from "components";
import { Root, ErrorWrapper } from "./SignInFormStyles";
import { COLORS } from "constants/colors";
import { pageRoutes } from "constants/pageRoutes";
import { useStore } from "store/authStore";
import history from "routes/AppHistory";

function SignInForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const logIn = useStore((state) => state.logIn);
  const logOut = useStore((state) => state.logOut);

  const handleEmailChange = (e: React.ChangeEvent<any>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<any>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");
    if (email === "admin" && password === "123456") {
      setLocalStoragAuth({ auth: true, balance: 0 });
      logIn();
      history.push(pageRoutes.MAIN);
    } else {
      setErrorMessage(true);
      setEmail("");
      setPassword("");
    }
  };

  const addErrorMessage = (isError: boolean) => {
    if (isError)
      return (
        <ErrorWrapper>
          <Text type="h4" color={COLORS.RED}>
            Неверный логин или пароль!
          </Text>
        </ErrorWrapper>
      );
  };

  const getLocalStorageAuth = () => {
    let JSONuser: string | null;
    JSONuser = localStorage.getItem("user");
    const user = JSON.parse(JSONuser || '{"auth": false, "balance": 0}');
    return user;
  };

  const setLocalStoragAuth = (user: { auth: boolean; balance: number }) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  useEffect(() => {
    const user = getLocalStorageAuth();
    user.auth ? logIn() : logOut();
  }, [logIn, logOut]);

  return (
    <Root onSubmit={handleSubmit}>
      <Text type="h1" color={COLORS.BLACK}>
        Sign in to your account
      </Text>
      <Input
        name="email"
        placeholder="Email address"
        width="100%"
        bordercolor={COLORS.LIGHT_BLUE}
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        name="password"
        placeholder="Password"
        width="100%"
        bordercolor={COLORS.LIGHT_BLUE}
        value={password}
        onChange={handlePasswordChange}
        type="password"
      />
      <Button
        text="Sign In"
        textcolor={COLORS.WHITE}
        backgroundcolor={COLORS.DARK_BLUE}
        bordercolor={COLORS.DARK_BLUE}
        type="submit"
        onClick={() => {}}
      />
      {addErrorMessage(errorMessage)}
    </Root>
  );
}

export default SignInForm;
