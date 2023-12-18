import React, { useState } from 'react'
import {phonesData} from "./ProductsData"
import { Card,Button } from 'react-bootstrap'
const Products = () => {

    const [Items,setItems] = useState(phonesData)

    const decQty =(id)=>{
        const newItem = Items.map((Item)=>
        Item.id === id && Item.qty >1 ?{...Item,qty:Item.qty-1}:Item 
        )
    setItems(newItem);
    }

    const incQty =(id)=>{
        const newItem = Items.map((Item)=>
        Item.id === id  ?{...Item,qty:Item.qty+1}:Item 
        )
    setItems(newItem);
    }

  return (
    <div>
        
        <h2 className='bg-info text-white'>Products</h2>

{Items.map((Item)=>(
<div className='d-inline-flex' key={Item.id}>
<Card className='shadow p-3 m-2 bg-body rounded' style={{ width: '18rem' }}>
<Card.Img style={{ height: '15rem' }}
className='p-2 ' variant="top" src={require("./pics/benchpress.jpg")} />
<Card.Body>
  <Card.Title className='text-primary'>{Item.model}</Card.Title>
  <Card.Text>
  {Item.desc}
  </Card.Text>
  <h5>Price:{Item.price}</h5>
  <div>
      <p>Qty:
      <Button className='m-1' onClick={()=>decQty(Item.id)}>-</Button>
      {Item.qty}
      <Button className='m-1' onClick={()=>incQty(Item.id)}>+</Button>
      </p>
  </div>
  <Button variant="primary">Add to Cart</Button>
</Card.Body>
</Card>
</div>
))}
   
    </div>
  )
}

export default Products