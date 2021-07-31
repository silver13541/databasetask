import React, { useState } from "react";

export default function Task2({ rescities }) {
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState("");
  const [hidden, setHidden] = useState(true);
  const [button, setButton] = useState("вперед");

  function onChange(e) {
    let value = e.target.value;
    setValue(value);
  }

  function onClick() {
    if (button == "вперед") {
      setButton('назад');
    } else {
      setButton('вперед');
    }
  }

  function Search() {
    setButton("вперед");
    if (value != "") {
      const cities = rescities
        .filter((city) =>
          city.Name.toLowerCase().startsWith(value.toLowerCase())
        );
      setCities(cities);
      setHidden(false);
    }
  }

  return (
    <>
      <input onChange={onChange} type="text" size="10" />
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

Task2.getInitialProps = async () => {
  const response = await fetch("http://localhost:4000/task4");
  const rescities = await response.json();
  return { rescities };
};
