import axios from "axios"
import { useState, useEffect } from "react"
import Weather from "./Weather"

const Info = ({country}) => {
  const [weather, setWeather] = useState([])
  const languages = Object.values(country.languages)

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)
      .then(response => {
        setWeather(response.data)
      })
  }, [])

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Languages:</p>
      <ul>
        {languages.map(language => <li key={language}>{language}</li>)}
      </ul>
      <img src={country.flags.png} />
      <Weather country={country} weather={weather} />
    </div>
  )
}

export default Info