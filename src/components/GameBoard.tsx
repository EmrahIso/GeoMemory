import type { ReactNode } from 'react';
import Card from './Card';
import type { AllCountriesArray, Country } from './App';

type GameBoardProps = {
  allCountries: AllCountriesArray;
};

const GameBoard = ({ allCountries }: GameBoardProps) => {
  return (
    <div className='grid sm:grid-cols-2 lg:mb-25 mb-10 lg:mt-31 mt-12 lg:grid-cols-3 gap-x-12 gap-y-12 xs-mobile-grid'>
      {allCountries.map((country: Country): ReactNode => {
        return <Card key={country.key} countryData={country} />;
      })}
    </div>
  );
};

export default GameBoard;
