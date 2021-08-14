import React, { useState } from "react";

const Country = ({
  countryName,
  countryCapital,
  countryPopulation,
  countryLanguages,
  countryFlag,
}) => {
  const [showDetails, setshowDetails] = useState(false);
  const testLangs = [{ name: "english" }, { name: "polish" }];
  const handleDetailsButtonClick = () => {
    setshowDetails(true);
  };
  return (
    <div>
      <div>{countryName}</div>
      <br />
      <button onClick={() => setshowDetails(!showDetails)}>show</button>
      {showDetails && (
        <div>
          <h2>{countryName}</h2>
          <div>capital {countryCapital}</div>
          <div>population {countryPopulation}</div>
          <br />
          <h3>Spoken languages {countryLanguages}</h3>
          <ul>
            {testLangs.map((language) => (
              <li>{language.name}</li>
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
