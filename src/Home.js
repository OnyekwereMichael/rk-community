import { useState } from "react";

function Home() {
const [count, setCount] = useState(0)

const increase = () =>{
  setCount(count + 1)
}
  return(
    <header>
   <div>
    <p>  {count}</p>
    <div className="mam">
  <button onClick={increase} className="butt1">ADD</button>
  <button onClick={() => {
    setCount(count - 1)
  }} className="butt2">SUB</button>
  </div>
   </div>

  
   </header>

  )
}
  export default Home;