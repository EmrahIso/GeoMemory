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
      className='flex items-center text-md gap-2 p-2.5 font-semibold text-gray-800 dark:text-gray-50 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 rounded-2xl transition-colors'
      onClick={changeColorThemeHandler}
      aria-label={`Switch to ${
        currentColorTheme === 'light' ? 'dark' : 'light'
      } mode`}
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
      {currentColorTheme.charAt(0).toUpperCase() +
        currentColorTheme.slice(1) +
        ' Mode'}
    </button>
  );
};

export default ThemeSwitchButton;
