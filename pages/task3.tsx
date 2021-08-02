import React, { useEffect, useState } from "react";
import { Header } from "../layout/Header";

export default function Task3({ rescities }) {
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState(1);
  const [button, setButton] = useState("next");

  function onChange(e) {
    setButton("next");
    setValue(e.target.value);
  }

  function onClick() {
    button == "next" ? setButton("back") : setButton("next");
  }

  useEffect(() => {
    if (button == "next") {
      const cities = rescities
        .filter((city) => city.country_id == value)
        .slice(0, 5);
      setCities(cities);
    } else {
      const cities = rescities.filter((city) => city.country_id == value).slice(5,10);
      setCities(cities);
    }
  }, [value, button]);

  return (
    <>
    <Header />
      <select onChange={onChange}>
        <option value="1">Austria</option>
        <option value="2">Belgium</option>
        <option value="3">France</option>
        <option value="4">Germany</option>
        <option value="5">Sweden</option>
      </select>
      <hr />

      {cities.map((city) => (
        <ul key={city.id}>
          <li>{city.name}</li>
        </ul>
      ))}
      <button onClick={onClick}>{button}</button>
    </>
  );
}

Task3.getInitialProps = async () => {
  const response = await fetch("https://databasetask.herokuapp.com/cities");
  const rescities = await response.json();
  return { rescities };
};
