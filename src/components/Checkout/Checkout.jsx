import React from 'react';
import "./Checkout.css";
import checkimg from '../../Assets/img12.jpg'
import Subtotal from './Subtotal';
import { useStateValue } from '../StateProvider/Stateprovider';
import CheckoutProduct from './CheckoutProduct';
 

function Checkout() {
  const[{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className='checkout__left'>
        <img className='checkout__ad' src={checkimg} alt=""/>
 
        <div>
          <h2 className='checkout__title'>Your Shopping Cart</h2>

          {basket.map(item => {
          <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          />
        })}
         
          </div>
      
         </div>

         <div className='checkout__right'>
          <Subtotal/> 
         </div>
      </div>
  )
}

export default Checkout
