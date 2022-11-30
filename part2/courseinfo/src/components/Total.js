const Total = ({parts}) => {
  return (
    <p>
      <b>Number of exercises: </b> 
      {parts.reduce(function (acc, part) {return acc + part.exercises}, 0)}
    </p>
  )
}

export default Total