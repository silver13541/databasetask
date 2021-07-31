import React from "react";

export default function Task1({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <ul key={country.id}>
          <li>{country.name}</li>
        </ul>
      ))}
    </div>
  );
}

Task1.getInitialProps = async () => {
  const response = await fetch("http://localhost:4000/task1");
  const countries = await response.json();
  return { countries };
};
