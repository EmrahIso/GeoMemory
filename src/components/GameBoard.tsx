import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import Card from './Card';

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

type AllCountriesArray = Country[];

const GameBoard = () => {
  const [allCountries, setAllCountries] = useState<AllCountriesArray>([]);

  useEffect((): void => {
    const allCountriesPlaceholder: AllCountriesArray = [];

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
      } catch (error) {
        console.error('API fetch error:', error);
      }
    }

    fetchCountries();
  }, []);

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
    <div className='grid sm:grid-cols-2 lg:mb-25 mb-10 lg:mt-31 mt-12 lg:grid-cols-3 gap-x-12 gap-y-12 xs-mobile-grid cursor-pointer'>
      {allCountries.map((country: Country): ReactNode => {
        return <Card key={country.key} countryData={country} />;
      })}
    </div>
  );
};

export default GameBoard;
