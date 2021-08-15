import { useState, useEffect } from "react";
import Search from "./components/Search";
import axios from "axios";
import SearchResultsList from "./components/SearchResultsList";

function App() {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };
  const filterCountries = (singleCountry, nameFilter) => {
    if (singleCountry.name.toLowerCase().includes(nameFilter.toLowerCase())) {
      return singleCountry;
    }
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <Search countryNameFilter={name} handleChange={nameChangeHandler} />
      <SearchResultsList
        countryNameFilter={name}
        countriesList={countries.filter((country) =>
          filterCountries(country, name)
        )}
      />
    </div>
  );
}
export default App;
