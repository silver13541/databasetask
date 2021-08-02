import React, { useState, useEffect } from "react";
import { Header } from "../layout/Header";

export default function Task6({ rescities }) {
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState("");
  const [hidden, setHidden] = useState(true);
  const [button, setButton] = useState("next");

  useEffect(() => {
    if (value != "") {
      setHidden(false);
      if (button == "next") {
        const cities = rescities
          .filter((city) =>
            city.Name.toLowerCase().startsWith(value.toLowerCase())
          )
          .slice(0, 5);
        if (cities.length == 0) setHidden(true);
        setCities(cities);
      } 
      else if (button == "back") {
        const cities = rescities
          .filter((city) =>
            city.Name.toLowerCase().startsWith(value.toLowerCase())
          )
          .slice(5, 10);
        setCities(cities);
      }
    } 
    else {
      setHidden(true);
      setCities([]);
    }
  }, [value, button]);

  function onChange(e) {
    setButton("next");
    setValue(e.target.value);
  }

  function onClick() {
    button == "next" ? setButton("back") : setButton("next");
  }

  return (
    <>
    <Header />
      <input onChange={onChange} type="text" size={10} />
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

Task6.getInitialProps = async () => {
  const response = await fetch("https://databasetask.herokuapp.com/cities");
  const rescities = await response.json();
  return { rescities };
};
