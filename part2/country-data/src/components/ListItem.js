import { useState } from "react"
import Info from "./Info"

const ListItem = ({country}) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <div>
      <li>
        {country.name.common}
        <button onClick={handleClick}>{active ? 'Hide' : 'Show'}</button>
        {(active === true) && (
          <Info country={country} />
        )}
      </li>
    </div>
  )
}

export default ListItem