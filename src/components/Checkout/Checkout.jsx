import React from 'react';
import "./Checkout.css";
import checkimg from '../../Assets/img12.jpg'
import Subtotal from './Subtotal';
 

function Checkout() {
  return (
    <div className="checkout">
      <div className='checkout__left'>
        <img className='checkout__ad' src={checkimg} alt=""/>

        <div>
          <h2 className='checkout__title'>Your Shopping Cart</h2>
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
         </div>

         <div className='checkout__right'>
          {/* <Subtotal/> */}
         </div>
      </div>
  )
}

export default Checkout
