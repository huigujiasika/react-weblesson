
import { useState } from "react"


const App = () => {
  
  const [left,setLeft]=useState(0)
  const [right,setRight]=useState(0)
  const [allClicks,setAll]=useState([])

  const handleLeftClick =() =>{
    setAll(allClicks.concat('L'))
    setLeft(left+1)
  }

  const handleRightClick =() =>{
    setAll(allClicks.concat('R'))
    setRight(right+1)
  }
 
  const setToValue = (newValue) => () =>{
    console.log('value now',newValue)
    setToValue(newValue)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      <button onClick={handler('word')}>right</button>
      <p>{allClicks.join(" ")}</p>
    </div>
  )
}

export default App