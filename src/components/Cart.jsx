import React from 'react'
import  {Card, Button}  from 'react-bootstrap';
import {remove} from './store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'


const Cart = () => {
const productCart = useSelector(state=> state.cart);
const dispatch = useDispatch()
 const removeToCart = (id)=>(
 // dispacth to remove action
  dispatch(remove(id))
 )

const cards = productCart.map((product)=>(
  <div className='col-md-12' style={{marginBottom:'10px'}} key={product.id}>
  <Card  className='h-100'>
  <div className="text-center">
    <Card.Img variant="top" src={product.image} 
    style={{height:'130px', width:'100px'  }} />
    </div>
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>
        INR {product.price}
      </Card.Text>
      </Card.Body>
   <Card.Footer style={{background:'white'}}>
        <Button variant="danger" onClick={()=>removeToCart(product.id)} >Delete Item</Button>
        </Card.Footer>
  
   </Card>
  </div>
)
);

  return (
     <div className='row'>
      <h1> Cart</h1>
     {cards}
    </div>
  )
}

export default Cart
