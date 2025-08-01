import type { ReactNode } from 'react';

type HeaderNavigationProps = {
  children?: ReactNode;
};

const HeaderNavigation = ({ children }: HeaderNavigationProps) => {
  return (
    <header className='h-[80px] shadow-sm dark:shadow-md bg-white dark:bg-silver relative '>
      <div className='container flex items-center justify-between xl:max-w-[1280px] mx-auto px-4 py-4 h-full'>
        <h1 className='text-xl font-black text-gray-800 dark:text-gray-50'>
          GeoMemory
        </h1>
        {children}
      </div>
    </header>
  );
};

export default HeaderNavigation;
