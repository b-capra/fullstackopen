import Info from './Info'

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
        {list.map(country => 
          <li key={list.indexOf(country)}>
            {country.name.common}
            <button>Show</button>
          </li>
        )}
      </ul>
    )
  } else if (list.length === 1) {
    return (
      <Info country={list[0]} />
    )
  } else if (list.length === 0) {
    return (
      <p>Sorry, no countries match that search.</p>
    )
  }
}

export default CountryDisplay