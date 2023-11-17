import React, { useRef } from 'react'
import {useState} from 'react';

function Scheme() {
const [data, Setdata] = useState([])
    const inputref = useRef("null")
  return (
<div className='redmi'>
  <input type="text" placeholder='ASK YOUR QUESTION' ref={inputref}/> 
  <button onClick={() =>{
    Setdata([...data, inputref.current.value])
  }}>SUBMIT</button>

  {data.map((item, index) =>{
    return <h2 key={index}>{item}</h2>
  })}
</div>

  )
  }

export default Scheme;