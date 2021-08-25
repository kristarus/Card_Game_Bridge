import { useState, useEffect } from "react";
import {
  Root,
  CardsWrapper,
  HeaderWrapper,
  CardBtnWrapper,
  BalanceWrapper,
  CircularProgressWrapper,
} from "./BoardStyles";
import { Button, Text } from "components";
import { Balance, Card } from "modules";
import { CircularProgress } from "@material-ui/core";
import { useQuery } from "react-query";
import { COLORS } from "constants/colors";

function Board() {
  const COEFFICIENT = 10;
  const [cardsType, setCardsType] = useState<{
    leftType: string;
    leftValue: number;
    rightType: string;
    rightValue: number;
  } | null>(null);
  const [boardType, setBoardType] = useState<
    "start" | "win" | "fail" | "choose"
  >("start");
  const [balance, setBalance] = useState<number>(0);

  const getCards = async () =>
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((res) => res.json())
      .then((res) => {
        const id = res.deck_id;
        return fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=2`);
      })
      .then((res) => res.json())
      .then((res) => res.cards)
      .then((res) => {
        setCardsType({
          leftType: res[0].code,
          leftValue: getCardValue(res[0].value),
          rightType: res[1].code,
          rightValue: getCardValue(res[1].value),
        });
        return res;
      });

  const getCardValue = (value: string) => {
    switch (value) {
      case "JACK":
        return 11;
      case "QUEEN":
        return 12;
      case "KING":
        return 13;
      case "ACE":
        return 14;
      default:
        return +value;
    }
  };

  const chooseCard = (selected: "left" | "right") => {
    if (getGameResult("left") === null) return;
    if (
      (selected === "left" && getGameResult("left")) ||
      (selected === "right" && getGameResult("right"))
    ) {
      setLocalStoragBalance({ auth: true, balance: balance + COEFFICIENT });
      setBalance(balance + COEFFICIENT);
      setBoardType("win");
    } else {
      setLocalStoragBalance({ auth: true, balance: balance - COEFFICIENT });
      setBalance(balance - COEFFICIENT);
      setBoardType("fail");
    }
  };

  const getGameResult = (selected: "left" | "right") => {
    if (cardsType) {
      if (selected === "left" && cardsType.leftValue >= cardsType.rightValue)
        return true;
      else if (
        selected === "right" &&
        cardsType.leftValue <= cardsType.rightValue
      )
        return true;
      else return false;
    } else return null;
  };

  const addCards = (boardType: "start" | "win" | "fail" | "choose") => {
    switch (boardType) {
      case "start":
        return (
          <CardsWrapper>
            <Card type={null} />
            <Button
              text="Играть"
              textcolor={COLORS.WHITE}
              backgroundcolor={COLORS.DARK_BLUE}
              bordercolor={COLORS.DARK_BLUE}
              onClick={() => {
                refetchCards().then((res) => {
                  setBoardType("choose");
                  return res;
                });
              }}
            />
            <Card type={null} />
          </CardsWrapper>
        );
      case "win":
      case "fail":
        if (cardsType === null) {
          return (
            <CardsWrapper>
              <Card type={null} />
              <CardBtnWrapper>
                <Button
                  text="Слева"
                  textcolor={COLORS.WHITE}
                  backgroundcolor={COLORS.DARK_BLUE}
                  bordercolor={COLORS.DARK_BLUE}
                  onClick={() => {
                    chooseCard("left");
                  }}
                />
                <Button
                  text="Справа"
                  textcolor={COLORS.WHITE}
                  backgroundcolor={COLORS.DARK_BLUE}
                  bordercolor={COLORS.DARK_BLUE}
                  onClick={() => {
                    chooseCard("right");
                  }}
                />
              </CardBtnWrapper>
              <Card type={null} />
            </CardsWrapper>
          );
        }

        return (
          <CardsWrapper>
            <Card type={cardsType.leftType} />
            <Button
              text="Сыграть ещё"
              textcolor={COLORS.WHITE}
              backgroundcolor={COLORS.DARK_BLUE}
              bordercolor={COLORS.DARK_BLUE}
              onClick={() => {
                refetchCards().then((res) => {
                  setBoardType("choose");
                  return res;
                });
                setCardsType(null);
              }}
            />
            <Card type={cardsType.rightType} />
          </CardsWrapper>
        );
      case "choose":
        return (
          <CardsWrapper>
            <Card type={null} />
            <CardBtnWrapper>
              <Button
                text="Слева"
                textcolor={COLORS.WHITE}
                backgroundcolor={COLORS.DARK_BLUE}
                bordercolor={COLORS.DARK_BLUE}
                onClick={() => {
                  chooseCard("left");
                }}
              />
              <Button
                text="Справа"
                textcolor={COLORS.WHITE}
                backgroundcolor={COLORS.DARK_BLUE}
                bordercolor={COLORS.DARK_BLUE}
                onClick={() => {
                  chooseCard("right");
                }}
              />
            </CardBtnWrapper>
            <Card type={null} />
          </CardsWrapper>
        );
      default:
        break;
    }
  };

  const addHeaders = (boardType: "start" | "win" | "fail" | "choose") => {
    switch (boardType) {
      case "start":
      case "choose":
        return (
          <HeaderWrapper>
            <Text type="h1" color={COLORS.BLACK}>
              Кто выиграет?
            </Text>
            <Text type="h3" color={COLORS.DARK_BLUE}>
              Сыграй в игру и испытай удачу
            </Text>
          </HeaderWrapper>
        );
      case "win":
        if (cardsType === null) {
          return (
            <HeaderWrapper>
              <Text type="h1" color={COLORS.BLACK}>
                Кто выиграет?
              </Text>
              <Text type="h3" color={COLORS.DARK_BLUE}>
                Сыграй в игру и испытай удачу
              </Text>
            </HeaderWrapper>
          );
        }
        return (
          <HeaderWrapper>
            <Text type="h1" color={COLORS.BLACK}>
              Вы выиграли!
            </Text>
            <Text type="h3" color={COLORS.DARK_BLUE}>
              :)
            </Text>
          </HeaderWrapper>
        );
      case "fail":
        if (cardsType === null) {
          return (
            <HeaderWrapper>
              <Text type="h1" color={COLORS.BLACK}>
                Кто выиграет?
              </Text>
              <Text type="h3" color={COLORS.DARK_BLUE}>
                Сыграй в игру и испытай удачу
              </Text>
            </HeaderWrapper>
          );
        }
        return (
          <HeaderWrapper>
            <Text type="h1" color={COLORS.BLACK}>
              Вы проиграли
            </Text>
            <Text type="h3" color={COLORS.DARK_BLUE}>
              :(
            </Text>
          </HeaderWrapper>
        );
      default:
        break;
    }
  };

  const getLocalStorageBalance = () => {
    let JSONuser: string | null;
    JSONuser = localStorage.getItem("user");
    const user = JSON.parse(JSONuser || '{"auth": true, "balance": 0}');
    return user;
  };

  const setLocalStoragBalance = (user: { auth: boolean; balance: number }) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const {
    isLoading: isLoadingCards,
    error: errorCards,
    refetch: refetchCards,
  } = useQuery("Cards", getCards, {
    enabled: false,
  });

  const addGameData = () => {
    if (isLoadingCards)
      return (
        <CircularProgressWrapper>
          <CircularProgress />
        </CircularProgressWrapper>
      );
    else if (errorCards)
      return (
        <Text type="h1" color={COLORS.BLACK}>
          "Возникла ошибка, попробуйте снова."
        </Text>
      );
    else
      return (
        <>
          <BalanceWrapper>
            <Balance value={balance} />
          </BalanceWrapper>
          <Root>
            {addHeaders(boardType)}
            {addCards(boardType)}
          </Root>
        </>
      );
  };

  useEffect(() => {
    const user = getLocalStorageBalance();
    setBalance(user.balance);
  }, []);

  return addGameData();
}

export default Board;
