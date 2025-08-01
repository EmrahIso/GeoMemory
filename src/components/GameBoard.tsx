import { type ReactNode } from 'react';
import Card from './Card';
import type { CardTypesArray, CardType } from './App';

type GameBoardProps = {
  roundCards: CardTypesArray;
  setRoundCards: (roundCards: CardTypesArray) => void;
  updateScore: (newScore: number) => void;
  currentScore: number;
  updateBestScore: (newBestScore: number) => void;
  currentBestScore: number;
  startLoading: () => void;
  goToEndScreen: () => void;
};

const GameBoard = ({
  roundCards,
  setRoundCards,
  updateScore,
  currentScore,
  updateBestScore,
  currentBestScore,
  startLoading,
  goToEndScreen,
}: GameBoardProps) => {
  const cardClickHandler: React.MouseEventHandler<HTMLElement> = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const clickedCard = event.target as HTMLElement;
    const clickedCardId: string = clickedCard.id;

    const CardWithClickedCardId: CardType | undefined = roundCards.find(
      (card: CardType) => card.country.key === clickedCardId
    );

    if (CardWithClickedCardId !== undefined) {
      // Click on memory card

      if (CardWithClickedCardId.isClicked === false) {
        const roundCardsCopy: CardTypesArray = roundCards;

        const roundCardsCopyWithoutClickedCard: CardTypesArray =
          roundCardsCopy.filter(
            (roundCard: CardType) => roundCard.country.key !== clickedCardId
          );

        const newClickedCardData: CardType = CardWithClickedCardId;
        newClickedCardData.isClicked = true;

        roundCardsCopyWithoutClickedCard.push(newClickedCardData);

        const shuffledRoundCardsCopyWithoutClickedCard: CardTypesArray =
          shuffleArray(roundCardsCopyWithoutClickedCard);

        setRoundCards(shuffledRoundCardsCopyWithoutClickedCard);
        updateScore(currentScore + 1);

        console.log('Round over: ', checkIfRoundIsOver());

        if (checkIfRoundIsOver()) {
          // round over

          if (currentScore > currentBestScore) {
            updateBestScore(currentScore + 1);
          }
          startLoading(); // To render a new set of country cards.
        }
      } else {
        // GAME OVER

        console.log('game is over');

        if (currentScore > currentBestScore) {
          updateBestScore(currentScore);
        }

        goToEndScreen();
      }
    }
  };

  const checkIfRoundIsOver = (): boolean => {
    const unClickedCards: CardTypesArray = roundCards.filter(
      (card: CardType) => card.isClicked === false
    );

    if (unClickedCards.length === 0) {
      return true;
    }

    return false;
  };

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array: CardTypesArray): CardTypesArray => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  return (
    <div className='grid sm:grid-cols-2 lg:mb-25 mb-10 lg:mt-31 mt-12 lg:grid-cols-3 gap-x-12 gap-y-12 xs-mobile-grid'>
      {roundCards.map((card: CardType): ReactNode => {
        return (
          <Card
            key={card.country.key}
            cardClickHandler={cardClickHandler}
            countryData={card.country}
          />
        );
      })}
    </div>
  );
};

export default GameBoard;
