
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClick(){
    alert("this is js")
  }
  const handleClick2=()=>{
    alert('wow')
  }


  return (
    <>
    
      <h1> React core cocepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Ckick me</button>
      <button onClick={handleClick2}>click</button>
      <button onClick={()=>{alert('this click')}}>This Click</button>
     
    </>
  )
}

export default App
