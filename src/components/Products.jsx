 import React,{useEffect,useState} from 'react'
import  {Card, Button}  from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {add} from './store/cartSlice'
import {getProducts} from './store/productSlice'


const Products = () => {
  const dispatch = useDispatch();

  const {data: products,status} =  useSelector(state => state.products);
   
   //const [products, setProducts] = useState([])
   
   useEffect(()=>{
    //     //api 
    //  fetch('https://fakestoreapi.com/products')
    //  .then(data=> data.json())
    //  .then(result => setProducts(result) )
    
    // // dispatch an action to fetch products
    dispatch(getProducts());

    },[]);

    if(status === 'loading'){
 return <p>Loading...</p>
    }
    if(status === 'error'){
      return <p>Error: Sometning went wrong</p>
         }
const addToCart = (product)=> {
  // dispatch to add action
  dispatch(add(product))
}


const cards = products.map((product)=>(
    <div className='col-md-3' style={{marginBottom:'10px'}} key={product.id}>
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
          <Button variant="primary" onClick ={()=>addToCart(product)}>Add To Cart</Button>
          </Card.Footer>
    
    </Card>
    </div>
  )

)

  return (
    <div className='row'>
    
      {cards}
    </div>
  )
}

export default Products
