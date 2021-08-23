import { useState } from "react";
import { Input, Text, Button } from "components";
import { Root } from "./SignInFormStyles";
import { COLORS } from "constants/colors";

function SignInForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<any>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<any>) => {
    setPassword(e.target.value);
  };

  return (
    <Root>
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
        type="email"
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
        onSubmit={() => {}}
      />
    </Root>
  );
}

export default SignInForm;
