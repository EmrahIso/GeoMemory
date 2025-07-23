import { useState } from 'react';
import HeaderNavigation from './HeaderNavigation';
import FooterNavigation from './FooterNavigation';
import ThemeSwitchButton from './ThemeSwitchButton';

export type colorThemeType = 'light' | 'dark';

function App() {
  const [colorTheme, setColorTheme] = useState<colorThemeType>('light');

  const changeColorThemeHandler = (): void => {
    setColorTheme(colorTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={'h-full bg-gray-50 dark:bg-gray-800 ' + colorTheme}>
      <HeaderNavigation>
        <ThemeSwitchButton
          currentColorTheme={colorTheme}
          changeColorThemeHandler={changeColorThemeHandler}
        />
      </HeaderNavigation>
      <FooterNavigation currentColorTheme={colorTheme} />
    </div>
  );
}

export default App;

/*

  - Navigation

  - Game Board

    - Card

  - Score

  - Dialogs

  - Footer


*/
