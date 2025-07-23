import type { colorThemeType } from './App';

type FooterNavigationProps = {
  currentColorTheme: colorThemeType;
};

const FooterNavigation = ({ currentColorTheme }: FooterNavigationProps) => {
  return (
    <footer className='h-[80px] shadow-sm dark:shadow-md bg-white dark:bg-silver '>
      <div className='container flex items-center justify-center gap-3 xl:max-w-[1280px] mx-auto px-4 py-4 h-full'>
        <p className='text-gray-800 dark:text-gray-50 text-lg font-semibold'>
          &copy; 2025
        </p>
        <a
          href='https://github.com/EmrahIso'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-800 hover:text-gray-600 dark:text-gray-50 dark:hover:text-gray-200 flex items-center gap-2 text-lg font-semibold'
        >
          Emrah Isovic
          {currentColorTheme === 'light' ? (
            <img
              src='./logo-github-light.svg'
              alt="GitHub logo linking to Emrah Isovic's profile"
              className='h-7 w-7'
            />
          ) : (
            <img
              src='./logo-github-dark.svg'
              alt="GitHub logo linking to Emrah Isovic's profile"
              className='h-7 w-7'
            />
          )}
        </a>
      </div>
    </footer>
  );
};

export default FooterNavigation;
