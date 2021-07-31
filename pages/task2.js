import React, { useEffect, useState } from "react";

export default function Task2({rescities}) {     
    const[cities,setCities] = useState(rescities);
    const[value,setValue] = useState(1);

    function onChange(e){
        let value = e.target.value;
        setValue(value); 
    } 

    useEffect(() => {   
            const cities = rescities.filter(city=> city.country_id == value);
            setCities(cities);
        },[value]
    )

    return (
        <>
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
        </>
    );
}

Task2.getInitialProps = async () => {
    const response = await fetch("http://localhost:4000/task2");
    const rescities = await response.json();
    return {rescities};
};
