import type { Country } from './GameBoard';

type CardProps = {
  countryData: Country;
};

const Card = ({ countryData }: CardProps) => {
  return (
    <div
      tabIndex={0}
      className='grid grid-template-rows[160px, 1fr] bg-white dark:bg-silver custom-shadow-small dark:shadow-md rounded-md mx-auto w-[288px] sm:w-[280px] cursor-pointer hover:scale-x-[1.05] hover:scale-y-[1.05] transition-transform'
    >
      <img
        className='h-[160px] w-full rounded-t-md'
        src={countryData.flags.png}
        alt={countryData.flags.alt}
      />
      <div className='rounded-b-md px-4 py-4'>
        <h2 className='font-bold text-lg text-gray-800 dark:text-gray-50'>
          {countryData.name.common}
        </h2>
      </div>
    </div>
  );
};

export default Card;
