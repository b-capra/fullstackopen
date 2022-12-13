import arrow from './arrow.png'

const Weather = ({country, weather}) => {
  if (weather.list === undefined) return
  const data = weather.list[0]
  
  const formatTemp = (raw) => {
    return `${raw.toFixed(1)}\u00B0F`
  }

  const arrowStyle = {
    height: '24px',
    transform: `rotate(${data.wind.deg - 45}deg)`
  }

  return (
    <div>
      <h2>Weather in {country.capital}</h2>
      <p>
        Temperature: {formatTemp(data.main.temp)}<br />
        Feels like: {formatTemp(data.main.feels_like)}
      </p>
      <p>
        High: {formatTemp(data.main.temp_max)}<br />
        Low: {formatTemp(data.main.temp_min)}
      </p>
      <img src={'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'} />
      <p>Wind: {data.wind.speed} mph <img src={arrow} style={arrowStyle}/></p>
    </div>
  )
}

export default Weather