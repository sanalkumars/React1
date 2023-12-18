import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Navbar = () => {

const [colour,setColour]= useState("Green")
const [count,updateCount] = useState(1)

const changeColour =()=>{
setColour("red");
}

const increment =()=>{
  updateCount(count+1);
}
const decrement =()=>{
  updateCount(count-1);
}

  return (
    <div>
      <h2>click to change the color {colour}</h2>
      <Button  onClick={changeColour}>clickMe</Button>
      <br />
      <br />
      <br />
      
      <Button onClick={increment} className='m-2 bg-success'>+</Button><h2> {count}</h2>
      <Button onClick={decrement} className='m-2 bg-danger'>-</Button>
    </div>
  )
}

export default Navbar