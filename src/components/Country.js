import React, { useState } from "react";

const Country = ({
  countryId,
  countryName,
  countryCapital,
  countryPopulation,
  countryLanguages,
  countryFlag,
}) => {
  const [showDetails, setshowDetails] = useState(false);

  const handleDetailsButtonClick = () => {
    setshowDetails(true);
  };

  const languagesReducer = (languages, currentLanguage) => {
    return languages.concat(currentLanguage.name);
  };

  return (
    <div>
      <div>
        {countryName}{" "}
        <button onClick={() => setshowDetails(!showDetails)}>show</button>
      </div>
      <br />
      {showDetails && (
        <div>
          <h2>{countryName}</h2>
          <div>capital {countryCapital}</div>
          <div>population {countryPopulation}</div>
          <br />
          <h3>Spoken languages</h3>
          <ul>
            {countryLanguages.reduce(languagesReducer, []).map((language) => (
              <li key={`${countryId}${language}`}>{language}</li>
            ))}
          </ul>
          <br />
          <div>
            <img src={countryFlag} alt="testImage" />
          </div>
        </div>
      )}
    </div>
  );
};
export default Country;
