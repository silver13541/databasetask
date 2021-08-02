import React, { useState, useEffect } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { Header } from "../layout/Header";

export default function Task7({ rescities }) {
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState("");
  const [hidden, setHidden] = useState(true);
  const [button, setButton] = useState("next");
  const [Coordinates, setCoordinates] = useState('56.874798 53.193452');

  useEffect(() => {
    if (value != "") {
      setHidden(false);
      if (button == "next") {
        const cities = rescities
          .filter((city) =>
            city.Name.toLowerCase().startsWith(value.toLowerCase())
          )
          .slice(0, 5);
        if (cities.length == 0) {
          setHidden(true);
          setCities([]);
        } else {
          setCities(cities);
          setCoordinates(cities[0].Coordinates);
        }
      } else if (button == "back") {
        const cities = rescities
          .filter((city) =>
            city.Name.toLowerCase().startsWith(value.toLowerCase())
          )
          .slice(5, 10);
        setCities(cities);
      }
    } else {
      setHidden(true);
      setCities([]);
    }
  }, [value, button]);

  function onChange(e) {
    setButton("next");
    setValue(e.target.value);
  }

  function onClick() {
    if (button == "next") {
      const cities = rescities
        .filter((city) =>
          city.Name.toLowerCase().startsWith(value.toLowerCase())
        )
        .slice(0, 5);
      if (cities.length == 0) setHidden(true);
      setCities(cities);
      setButton("back");
    } else {
      setButton("next");
    }
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
      <hr />
      <YMaps>
        <Map
          width="1000px"
          height="600px"
          state={{ center: Coordinates.split(" ").map(parseFloat), zoom: 6.5 }}
        >
          {cities.map((city) => (
            <Placemark
              modules={["geoObject.addon.balloon"]}
              key={city.id}
              geometry={city.coordinates.split(" ")}
              properties={{
                iconContent: city.name,
                balloonContent: city.name,
              }}
            />
          ))}
        </Map>
      </YMaps>
    </>
  );
}

Task7.getInitialProps = async () => {
  const response = await fetch("http://localhost:4000/cfromco");
  const rescities = await response.json();
  return { rescities };
};
