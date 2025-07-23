import type { colorThemeType } from './App';

type ThemeSwitchButtonProps = {
  currentColorTheme: colorThemeType;
  changeColorThemeHandler: React.MouseEventHandler<HTMLButtonElement>;
};

const ThemeSwitchButton = ({
  currentColorTheme,
  changeColorThemeHandler,
}: ThemeSwitchButtonProps) => {
  return (
    <button
      type='button'
      className='flex items-center text-lg gap-2 dark:gap-2.5 p-2.5 font-semibold text-gray-800 dark:text-gray-50 cursor-pointer'
      onClick={changeColorThemeHandler}
    >
      {currentColorTheme === 'light' ? (
        <img
          src='./sunny-outline.svg'
          alt='Light mode icon'
          className='h-7 w-7'
        />
      ) : (
        <img
          src='./moon-outline.svg'
          alt='Dark mode icon'
          className='h-7 w-7'
        />
      )}
      {currentColorTheme.at(0)?.toUpperCase() +
        currentColorTheme
          .split('')
          .splice(1, currentColorTheme.length)
          .join('') +
        ' Mode'}
    </button>
  );
};

export default ThemeSwitchButton;
