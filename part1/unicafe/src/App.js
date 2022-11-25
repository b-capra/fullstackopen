import { useState } from 'react'

const Heading = ({text}) => <h1>{text}</h1>

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const StatLine = ({text, num}) => (
  <tr>
    <th>{text}</th>
    <td>{Math.round(num * 100) / 100}</td>
  </tr>
)

const Statistics = ({totals}) => {
  if (totals[0] + totals[1] + totals[2] === 0) return (
    <div>
      <Heading text='Statistics' />
      <p>No feedback given yet. Try adding some!</p>
    </div>
  )

  return (
    <div>
      <Heading text='Statistics' />
      <table>
      <tbody>
        <StatLine text='Good' num={totals[0]} />
        <StatLine text='Neutral' num={totals[1]} />
        <StatLine text='Bad' num={totals[2]} />
        <StatLine text='All' num={totals[0] + totals[1] + totals[2]} />
        <StatLine text='Average' num={(totals[0] - totals[2]) / (totals[0] + totals[1] + totals[2])} />
        <StatLine text='Positive' num={totals[0] / (totals[0] + totals[1] + totals[2])} />
      </tbody>
      </table>
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