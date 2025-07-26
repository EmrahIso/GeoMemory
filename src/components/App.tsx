import { useState } from 'react';
import HeaderNavigation from './HeaderNavigation';
import FooterNavigation from './FooterNavigation';
import ThemeSwitchButton from './ThemeSwitchButton';
import ScoreBoard from './ScoreBoard';
import BestScoreBoard from './BestScoreBoard';
import GameBoard from './GameBoard';

export type colorThemeType = 'light' | 'dark';

const App = () => {
  const [colorTheme, setColorTheme] = useState<colorThemeType>('light');

  const changeColorThemeHandler = (): void => {
    setColorTheme(colorTheme === 'light' ? 'dark' : 'light');
  };

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
      <main className='bg-gray-50 dark:bg-gray-800'>
        <div className='container xl:max-w-[1280px] mx-auto px-4 py-4'>
          <div className='mt-10 flex items-center justify-between'>
            <ScoreBoard />
            <BestScoreBoard />
          </div>
          <div>
            <GameBoard />
          </div>
        </div>
      </main>
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
