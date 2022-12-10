import {useState, useEffect} from 'react'
import axios from "axios"
import CountryDisplay from './components/CountryDisplay'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearch = (event) => setSearchTerm(event.target.value)

  const countriesShown = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      Find Countries: <input value={searchTerm} onChange={handleSearch} />
      <CountryDisplay list={countriesShown} />
    </div>
  )
}

export default App;
