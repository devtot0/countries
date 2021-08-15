import React from "react";
import Country from "./Country";

const SearchResultsList = ({ countriesList, countryNameFilter }) => {
  const filterCountries = (singleCountry, nameFilter) => {
    if (singleCountry.name.toLowerCase().includes(nameFilter.toLowerCase())) {
      return singleCountry;
    }
  };

  return (
    <div>
      {countriesList
        .filter((country) => filterCountries(country, countryNameFilter))
        .map((filteredCountry) => (
          <Country
            key={filteredCountry.alpha3Code}
            countryId={filteredCountry.alpha3Code}
            countryName={filteredCountry.name}
            countryCapital={filteredCountry.capital}
            countryPopulation={filteredCountry.population}
            countryLanguages={filteredCountry.languages}
            countryFlag={filteredCountry.flag}
          />
        ))}
    </div>
  );
};

export default SearchResultsList;
