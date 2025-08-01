import type { Country } from './App';

type CardProps = {
  countryData: Country;
  cardClickHandler: React.MouseEventHandler<HTMLElement>;
  cardKeyDownHandler: React.KeyboardEventHandler<HTMLElement>;
};

const Card = ({
  countryData,
  cardClickHandler,
  cardKeyDownHandler,
}: CardProps) => {
  return (
    <article
      role='button'
      tabIndex={0}
      className='grid grid-template-rows[160px, 1fr] bg-white dark:bg-silver custom-shadow-small dark:shadow-md rounded-md mx-auto w-[288px] sm:w-[280px] cursor-pointer hover:scale-x-[1.05] hover:scale-y-[1.05] transition-transform'
      id={countryData.key}
      onClick={cardClickHandler}
      onKeyDown={cardKeyDownHandler}
    >
      <img
        className='h-[160px] w-full rounded-t-md pointer-events-none'
        src={countryData.flags.png}
        alt={'The Flag of ' + countryData.name.common}
      />
      <div className='rounded-b-md px-4 py-4 pointer-events-none'>
        <h2 className='font-bold text-lg text-gray-800 dark:text-gray-50 pointer-events-none'>
          {countryData.name.common}
        </h2>
      </div>
    </article>
  );
};

export default Card;
