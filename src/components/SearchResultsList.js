import React from "react";
import Country from "./Country";

const SearchResultsList = ({ countriesList }) => {
  const countryRender = (showButtonCondition) => {
    return (
      <div>
        {countriesList.map((filteredCountry) => (
          <Country
            key={filteredCountry.alpha3Code}
            showButton={showButtonCondition}
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
  if (countriesList.length > 10) {
    return <div>Too many countres, specify another filter</div>;
  } else if (countriesList.length === 1) {
    return countryRender(false);
  } else {
    return countryRender(true);
  }
};

export default SearchResultsList;
