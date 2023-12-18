
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';


const products = [
    {id:1, name:"laptop", brand:"Dell",qty:1},
    {id:2, name:"laptop", brand:"HP",qty:1},
    {id:3, name:"laptop", brand:"Acer",qty:1},
]


const Key = () => {

const[items,setItem] = useState(products)

const updateQty =(id)=>{
  const newItem =  items.map((item)=>
    item.id === id ? {...item,qty:item.qty+1}:item
    )
    setItem(newItem); 
}


  return (

    <div>
        {items.map((product)=>(
            <div className='bg-success text-white m-2' key={product.id}>
                <h1>{product.name}</h1>
                <h3>{product.brand}</h3>
                <h4>{product.qty}</h4>
                <Button onClick={()=>updateQty(product.id)} >+</Button>
            </div>
       ) )}
    </div>
  )
}

export default Key