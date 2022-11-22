import { useState } from 'react'

const Heading = ({text}) => <h1>{text}</h1>

const Button = ({text}) => {
  return (
    <button>{text}</button>
  )
}

const Total = () => {

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Heading text='Give Feedback' />
      <Button text='Good'/>
      <Button text='Neutral'/>
      <Button text='Bad'/>
      <Heading text='Statistics' />
      <Total />
      <Total />
      <Total />
    </div>
  )
}

export default App