import React, { useState, useEffect } from "react";
import { Header } from "../layout/Header";

export default function Task4({ rescities }) {
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState("");
  const [hidden, setHidden] = useState(true);
  const [button, setButton] = useState("next");

  function onChange(e) {
    setValue(e.target.value);
  }

  function onClick() {
    if (button == "next") {
      const cities = rescities
        .filter((city) =>
          city.Name.toLowerCase().startsWith(value.toLowerCase())
        )
        .slice(5, 10);
      setCities(cities);
      setButton("back");
    } else {
      const cities = rescities
        .filter((city) =>
          city.Name.toLowerCase().startsWith(value.toLowerCase())
        )
        .slice(0, 5);
      setCities(cities);
      setButton("next");
    }
  }

  function Search() {
    setButton('next')
    if (value != "") {
      const cities = rescities
        .filter((city) =>
          city.Name.toLowerCase().startsWith(value.toLowerCase())
        )
        .slice(0, 5);
      cities.length == 0 ? setHidden(true) : setHidden(false);
      setCities(cities);
    } else {
      setHidden(true);
      setCities([])  
    }
  }

  return (
    <>
    <Header />
      <input onChange={onChange} type="text" size={10} />
      <button onClick={Search}>Поиск</button>
      {cities.map((city) => (
        <ul key={city.id}>
          <li>{city.name}</li>
        </ul>
      ))}
      <button hidden={hidden} onClick={onClick}>
        {button}
      </button>
    </>
  );
}

Task4.getInitialProps = async () => {
  const response = await fetch("https://databasetask.herokuapp.com/cities");
  const rescities = await response.json();
  return { rescities };
};
