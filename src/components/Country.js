import React, { useState } from "react";

const Country = ({
  countryId,
  countryName,
  countryCapital,
  countryPopulation,
  countryLanguages,
  countryFlag,
  showButton,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [buttonText, setButtonText] = useState("show");

  const handleDetailsButtonClick = () => {
    buttonText === "show" ? setButtonText("hide") : setButtonText("show");
    setShowDetails(!showDetails);
  };

  const languagesReducer = (languages, currentLanguage) => {
    return languages.concat(currentLanguage.name);
  };

  const showCountryData = () => {
    return (
      <div>
        {
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
              <img src={countryFlag} alt={`The flag of ${countryName}`} />
            </div>
          </div>
        }
      </div>
    );
  };

  return (
    <div>
      <div>
        {countryName}{" "}
        {showButton ? (
          <button onClick={handleDetailsButtonClick}>{buttonText}</button>
        ) : (
          <div>{showCountryData()}</div>
        )}
      </div>
      <br />
      {showDetails && <div>{showCountryData()}</div>}
    </div>
  );
};
export default Country;
