import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    setVisitedCountries((prev) => {
      if (prev.find((item) => item.name.common === country.name.common)) {
        return prev.filter((item) => item.name.common !== country.name.common);
      }
      return [...prev, country];
    });
  };

  const handleVisitedFlags = (flag) => {
    setVisitedFlags((prev) => {
      if (prev.includes(flag)) {
        return prev.filter((item) => item !== flag);
      }
      return [...prev, flag];
    });
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div>
      <h1>Me & you Visited Countries: {countries.length}</h1>
      <h3>Total Country Visited: {visitedCountries.length}</h3>
      <h3>Total Visited Flags: {visitedFlags.length} </h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>

      <div className="visied-flags-container ">
        {visitedFlags.map((flag) => (
          <img src={flag}></img>
        ))}
      </div>
      <div className="countries countries-mobile ">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
