import { useState, useEffect } from 'react';
import HeaderNavigation from './HeaderNavigation';
import FooterNavigation from './FooterNavigation';
import ThemeSwitchButton from './ThemeSwitchButton';
import ScoreBoard from './ScoreBoard';
import BestScoreBoard from './BestScoreBoard';
import GameBoard from './GameBoard';
import HowToPlayGeoMemory from './HowToPlayGeoMemory';

export type colorThemeType = 'light' | 'dark';

type GameStateType = 'idle' | 'loading' | 'playing' | 'about';

export type Country = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
  };
  key: string;
};

export type AllCountriesArray = Country[];

const App = () => {
  // Color theme control

  const storageColorTheme: string | null = localStorage.getItem(
    '--geo-memory-color-theme'
  );

  let storageColorThemeTyped: colorThemeType = 'light';

  if (storageColorTheme === 'light' || storageColorTheme === 'dark') {
    storageColorThemeTyped = storageColorTheme;
  }

  const [colorTheme, setColorTheme] = useState<colorThemeType>(
    storageColorThemeTyped
  );

  const changeColorThemeHandler: React.MouseEventHandler<
    HTMLButtonElement
  > = (): void => {
    localStorage.setItem(
      '--geo-memory-color-theme',
      colorTheme === 'light' ? 'dark' : 'light'
    );
    setColorTheme(colorTheme === 'light' ? 'dark' : 'light');
  };

  // Game Control

  const [gameState, setGameState] = useState<GameStateType>('idle');

  const startLoadingHandler: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    setGameState('loading');
  };

  const startGameRound = () => {
    setGameState('playing');
  };

  const howToPlayGameHandler: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    setGameState('about');
  };

  const backToHomeHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    setGameState('idle');
  };

  // API Fetch

  const [allCountries, setAllCountries] = useState<AllCountriesArray>([]);

  useEffect((): void => {
    if (gameState === 'loading') {
      const allCountriesPlaceholder: AllCountriesArray = [];

      console.log('fetching');

      async function fetchCountries() {
        try {
          const response: Response = await fetch(
            'https://restcountries.com/v3.1/independent?status=true',
            { mode: 'cors' }
          );

          const responseJson: AllCountriesArray = await response.json();

          const randomNumbers: number[] = getRandomNumbers(
            6,
            responseJson.length - 1
          );

          responseJson.forEach((countryObj: Country, index: number) => {
            if (randomNumbers.includes(index)) {
              const newCountryObj: Country = {
                flags: countryObj['flags'],
                name: {
                  common: countryObj['name']['common'],
                },
                key: countryObj['name']['common'] + '-key',
              };

              allCountriesPlaceholder.push(newCountryObj);
            }
          });

          setAllCountries(allCountriesPlaceholder);

          startGameRound();
        } catch (error) {
          console.error('API fetch error:', error);
        }
      }

      fetchCountries();
    }
  }, [gameState]);

  // We use this function to generate 6 different countries.
  function getRandomNumbers(amount: number, maxNumber: number): number[] {
    const result: number[] = [];
    while (result.length < amount) {
      const num = Math.floor(Math.random() * (maxNumber + 1));

      if (!result.includes(num)) {
        result.push(num);
      }
    }
    return Array.from(result);
  }

  return (
    <div
      className={
        'bg-white min-h-screen dark:bg-silver xs:bg-red-200 ' + colorTheme
      }
    >
      <HeaderNavigation>
        <ThemeSwitchButton
          currentColorTheme={colorTheme}
          changeColorThemeHandler={changeColorThemeHandler}
        />
      </HeaderNavigation>

      {gameState === 'idle' && (
        <div className='container flex items-center flex-col gap-10 h-[800px] justify-center xl:max-w-[1280px] mx-auto px-4 py-4'>
          <button
            className='font-bold text-xl text-gray-800 dark:text-gray-50 cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-2xl py-3.5 px-4.5 transition-colors'
            onClick={startLoadingHandler}
          >
            Start Game
          </button>
          <button
            className='font-semibold text-md text-gray-800 dark:text-gray-50 cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-2xl py-2 px-4 transition-colors'
            onClick={howToPlayGameHandler}
          >
            How to play this game?
          </button>
        </div>
      )}

      {gameState === 'loading' && (
        <div className='container flex items-center flex-col gap-10 h-[800px] justify-center xl:max-w-[1280px] mx-auto px-4 py-4'>
          <p className='text-2xl font-medium text-gray-800 dark:text-gray-100'>
            Loading round ...
          </p>
        </div>
      )}

      {gameState === 'playing' && (
        <main className='bg-gray-50 dark:bg-gray-800'>
          <div className='container xl:max-w-[1280px] mx-auto px-4 py-4'>
            <div className='mt-10 flex items-center justify-between'>
              <ScoreBoard />
              <BestScoreBoard />
            </div>
            <div>
              <GameBoard allCountries={allCountries} />
            </div>
          </div>
        </main>
      )}

      {gameState === 'about' && (
        <main className='bg-gray-50 dark:bg-gray-800'>
          <HowToPlayGeoMemory backToHomeHandler={backToHomeHandler} />
        </main>
      )}

      <FooterNavigation currentColorTheme={colorTheme} />
    </div>
  );
};

export default App;

/*

  - Navigation

  - Game Board

    - Card

  - Score

  - Dialogs

  - Footer


*/
