import React from 'react';
import { Button } from 'react-bootstrap';

const Header = () => {

  const clickHandle =()=>{
       console.log("onClick event activeted");
  }
  const clicked=(name)=>{
    alert(name + " just double clicked ")
  }

  return (
    <div>
        <h2 className='bg-success'>componenet one</h2>
        <Button variant="primary" onClick={clickHandle}>Click me</Button>
        <h3 onDoubleClick={()=>clicked("sanal")} >DoubleClick</h3>
    </div>
  )
}

export default Header