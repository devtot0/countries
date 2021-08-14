import { useState, useEffect } from "react";
import Country from "./components/Country";
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

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
      console.log(countries);
    });
  }, []);

  return (
    <div>
      <Search countryNameFilter={name} handleChange={nameChangeHandler} />
      <SearchResultsList countryNameFilter={name} countriesList={countries} />
      <Country></Country>
    </div>
  );
}
export default App;
