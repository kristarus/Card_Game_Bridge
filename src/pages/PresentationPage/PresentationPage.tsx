import { COLORS } from "constants/colors";
import { Text, Button, Input } from "components";
import { SignInForm, NavigationMenu, Card, Balance } from "modules";

function PresentationPage() {
  return (
    <div>
      <Text type="h1" color={COLORS.DARK_BLUE}>
        Presentation Page
      </Text>
      <br />
      <br />
      <Button
        text="Button"
        textcolor={COLORS.DARK_BLUE}
        backgroundcolor={COLORS.WHITE}
        bordercolor={COLORS.DARK_BLUE}
        onClick={() => {}}
      />
      <br />
      <br />
      <Input
        name="name"
        placeholder="Ваше имя"
        width="30%"
        bordercolor={COLORS.DARK_BLUE}
        value=""
        onChange={() => {}}
      />
      <br />
      <br />
      <SignInForm />
      <NavigationMenu isAuth={true} />
      <br />
      <br />
      <Card type={null} />
      <Balance value={500} />
    </div>
  );
}

export default PresentationPage;
