import {useEffect, useState} from "react";
import Country from "../Components/Country";
import CountriesList from "../Components/CountriesList";
 
const SERVER_URL = "http://localhost:8080";
const ContinentContainer=() => {
const [continents, setContinents] = useState([]);
const [countries, setCountries] = useState([]);
const [guessedCountries, setGuessedCountries] = useState([]);
const [games, setGames] = useState(null);

useEffect(() => {
    fetch(`${SERVER_URL}/countries`)
    .then((response)=> response.json())
    .then((response)=> setCountries(response))

    // fetch(`${SERVER_URL}/games`)
    // .then((response)=> response.json())
    // .then((response)=> setGames(response))

}, []);

console.log({countries});
    


    return ( 
        <>
        <CountriesList countries = {countries}/>
        </>
        

    );
}
 
export default ContinentContainer;