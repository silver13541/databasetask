import React, { useEffect, useState } from "react";

export default function Task2({rescities}) {     
    const[cities,setCities] = useState([]);
    const[value,setValue] = useState(1);
    const[button,setButton]=useState('вперед')
    console.log(cities);

    function onChange(e){
        let value = e.target.value;
        let button = 'вперед';
        setButton(button);
        setValue(value); 
    } 

    function onClick(){ 
        if(button == 'вперед'){
            let button = 'назад'
            setButton(button);
        }
        else  {
        let button = 'вперед' 
        setButton(button)
        }
    }   

    useEffect(() => { 
            if (button == 'вперед') {
                const cities = rescities.filter(city => city.country_id == value).slice(0,5);
                setCities(cities);
            } 
            else {
                const cities = rescities.filter(city=> city.country_id == value);
                setCities(cities);
            }
        },[value,button]
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
        <button onClick={onClick}>{button}</button>
        </>
    );
}

Task2.getInitialProps = async () => {
    const response = await fetch("http://localhost:4000/task3");
    const rescities = await response.json();
    return {rescities};
};