import { useState } from 'react'

const Heading = ({text}) => <h1>{text}</h1>

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const Total = ({text, total}) => <div>{text}: {total}</div>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)

  return (
    <div>
      <Heading text='Give Feedback' />
      <Button text='Good' onClick={addGood} />
      <Button text='Neutral' onClick={addNeutral} />
      <Button text='Bad' onClick={addBad} />
      <Heading text='Statistics' />
      <Total text='Good' total={good} />
      <Total text='Neutral' total={neutral} />
      <Total text='Bad' total={bad} />
    </div>
  )
}

export default App