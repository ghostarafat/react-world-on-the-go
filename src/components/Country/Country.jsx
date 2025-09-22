import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const [visited, setVisited] = useState(false);
  // console.log(country);
  // console.log(handleVisitedCountries);

  const handleVisited = () => {
    // basic system
    // if (visited){
    //   setVisited(false);
    // }
    // else{
    //   setVisited(true);
    // }

    // ternary system
    // setVisited(visited ? false : true);

    // third system
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited ? "country-visited" : ""}`}>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.png.alt} />
      <h2>Name: {country.name.common}</h2>
      <h3>Capital: {country.capital.capital} </h3>
      <p>Population: {country.population.population}</p>
      {/* <p>Language: {country.languages.languages} </p> */}
      <p>Region:{country.region.region} </p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}{" "}
      </p>
      {/* <p>Currency: {country.currencies.currencies}</p> */}
      <p>Continent: {country.continents.continents}</p>
      <div className="gap-btn">
        <button onClick={handleVisited}>
          {visited ? "visited" : "Not Visited "}
        </button>
        <button
          onClick={() => {
            handleVisitedFlags(country?.flags?.flags?.png);
          }}
        >
          Add Visited Flag:{" "}
        </button>
      </div>
    </div>
  );
};

export default Country;
