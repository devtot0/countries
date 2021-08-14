import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [countries, setCountries] = useState({});
  const [name, setName] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <Search countryName={name} handleChange={nameChangeHandler}/>
    </div>
  );
}
export default App;
