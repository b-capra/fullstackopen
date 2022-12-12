import ListItem from './ListItem'

const ListMatching = ({countries}) => {
  return (
    <ul>
      {countries.map(country =>
        <ListItem key={countries.indexOf(country)} country={country} />
      )}
    </ul>
  )
}

export default ListMatching
