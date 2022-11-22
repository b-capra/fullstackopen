import { useState } from 'react'

const Heading = ({text}) => <h1>{text}</h1>

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const Total = ({text, total}) => <div>{text}: {Math.round(total * 100) / 100}</div>

const Avg = ({text, totals}) => {
  const avg = (totals[0] - totals[2]) / (totals[0] + totals[1] + totals[2])
  const rounded = Math.round(avg * 100) / 100

  return (
    <div>
      {text}: {rounded}
    </div>
  )
}

const Statistics = ({totals}) => {
  return (
    <div>
      <Heading text='Statistics' />
      <Total text='Good' total={totals[0]} />
      <Total text='Neutral' total={totals[1]} />
      <Total text='Bad' total={totals[2]} />
      <br></br>
      <Total text='All' total={totals[0] + totals[1] + totals[2]} />
      <Avg text='Average' totals={totals} />
      <Total text='Positive' total={totals[0] / (totals[0] + totals[1] + totals[2])} />
    </div>
  )
}

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

      <Statistics totals={[good, neutral, bad]}/>
    </div>
  )
}

export default App