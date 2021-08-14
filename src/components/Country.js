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
      <h1>{countryName}</h1>
      <br />
      <button onClick={() => setshowDetails(!showDetails)}>show</button>
      {showDetails && (
        <div>
          <div>capital {countryCapital}</div>
          <div>population {countryPopulation}</div>
          <br />
          <h2>languages {countryLanguages}</h2>
          <ul>
            {testLangs.map((language) => (
              <li>{language.name}</li>
            ))}
          </ul>
          <br />
          <div>
            <img src="" alt="testImage" />
          </div>
        </div>
      )}
    </div>
  );
};
export default Country;
