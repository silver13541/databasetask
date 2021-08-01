import React from "react";

export default function Task1({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <ul key={country.id}>
          <li>{country.Name}</li>
        </ul>
      ))}
    </div>
  );
}

Task1.getInitialProps = async () => {
  const response = await fetch("http://localhost:4000/countries");
  const countries = await response.json();
  return { countries };
};
