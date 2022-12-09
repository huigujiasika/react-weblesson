import { useState } from "react"


const Button =(props) =>(
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisitcLine=(props) => <div>{props.text} {props.value}</div>


const Head = (props) => <h1>{props.text}</h1>


const Statisitc =(props) =>{
  let [good,neutral,bad]=props.data
  let all=good+neutral+bad
  let average=(good-bad)/all
  let positive=good/all

  if (good+neutral+bad)
  return (
    <>
      <table>
        <tbody>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average}</td>
        </tr>   
        <tr>
          <td>positive</td>
          <td>{positive} %</td>
        </tr>   
        </tbody>    
      </table>

      
      {/* <StatisitcLine text="good" value={good} />
      <StatisitcLine text="neutral" value={neutral} />
      <StatisitcLine text="bad" value={bad} />
      <StatisitcLine text="all" value={all} />
      <StatisitcLine text="average" value={average} />
      <StatisitcLine text="positive" value={positive+"%"} /> */}
    
    </>
  )
  else
  return <div>No feedback given</div>

}




const App = () => {
  const [good,setGood]=useState(0)
  const [neutral,setNeutral]=useState(0)
  const [bad,setBad]=useState(0)
  const data=[good,neutral,bad]

  return (
    <>
      <Head text={"give feedback"} />
      <Button handleClick={()=>{setGood(good+1);console.log('set:',"goood",good+1) }} text="good" />
      <Button handleClick={()=>{setNeutral(neutral+1);console.log('set:',"neutral",neutral+1)}} text="neutral" />
      <Button handleClick={()=>{setBad(bad+1);console.log('set:',"bad",bad+1)}} text="bad" />

      <Head text={"statistics"} />
      <Statisitc data={data} />



      
    </>
  )
}

export default App