const Total = ({parts}) => {
  return (
    <p>
      <b>Number of exercises: </b> 
      {parts.reduce((acc, part) => acc + part.exercises, 0)}
    </p>
  )
}

export default Total