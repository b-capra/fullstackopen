import { useState } from 'react'

const Heading = ({text}) => <h1>{text}</h1>

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>

const StatNum = ({num}) => <div>{Math.round(num * 100) / 100}</div>

const StatTitle = ({text}) => <div>{text}</div>;

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
        <tr>
          <th><StatTitle text='Good' /></th>
          <td><StatNum num={totals[0]} /></td>
        </tr>
        <tr>
          <th><StatTitle text='Neutral' /></th>
          <td><StatNum num={totals[1]} /></td>
        </tr>
        <tr>
          <th><StatTitle text='Bad' /></th>
          <td><StatNum num={totals[2]} /></td>
        </tr>
        <tr>
          <th><StatTitle text='All' /></th>
          <td><StatNum num={totals[0] + totals[1] + totals[2]} /></td>
        </tr>
        <tr>
          <th><StatTitle text='Average' /></th>
          <td><StatNum num={(totals[0] - totals[2]) / (totals[0] + totals[1] + totals[2])} /></td>
        </tr>
        <tr>
          <th><StatTitle text='Positive' /></th>
          <td><StatNum num={totals[0] / (totals[0] + totals[1] + totals[2])} /></td>
        </tr>
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