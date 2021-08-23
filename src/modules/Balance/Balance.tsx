import { Root } from "./BalanceStyles";
import { Text } from "components";
import { IBalanceProps } from "./types";
import { COLORS } from "constants/colors";

function Balance({ value = 0 }: IBalanceProps) {
  return (
    <Root>
      <Text type="h4" color={COLORS.BLACK}>
        Balance:
      </Text>
      <Text type="h4" color={COLORS.BLACK}>
        {value}
      </Text>
    </Root>
  );
}

export default Balance;
