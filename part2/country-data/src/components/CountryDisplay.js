const CountryDisplay = ({list}) => {
  if (list.length >= 250) {
    return (
      <p>Try searching for {list[Math.floor(Math.random() * list.length)].name.common}</p>
    )
  } else if (list.length > 10) {
    return (
      <p>Try being more specific...</p>
    )
  } else if (list.length > 1) {
    return (
      <ul>
        {list.map(country => <li key={list.indexOf(country)}>{country.name.common}</li>)}
      </ul>
    )
  } else if (list.length === 1) {
    const country = list[0]
    const languages = Object.values(country.languages)

    console.log(country)

    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <p>Languages:</p>
        <ul>
          {languages.map(language => <li key={language}>{language}</li>)}
        </ul>
        <img src={country.flags.png} />
      </div>
    )
  } else if (list.length === 0) {
    return (
      <p>Sorry, no countries match that search.</p>
    )
  }
}

export default CountryDisplay