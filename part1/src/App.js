import logo from './logo.svg';
import './App.css';



const Hello =(props) =>{
  console.log("Fail");
  return(
    <div>
      
      <p>Hello {props.name} ,{props.age}</p>
    </div>
  )
}





const App = () => {
  const now=new Date()
  const a=10
  const b=20
  const age=10

  return (
    <>
      <h1>Greeting</h1>
      <Hello name="Gre" age={26+10}/>
      <Hello name="Dai" age={age}/>
      <Hello />
    </>
  )
}
export default App
