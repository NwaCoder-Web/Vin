import React from 'react';
import './Carts.css'
import CartsCard from './CartsCard';
import { useDispatch, useSelector } from 'react-redux';
import {clearCart} from "../../Global/Slice.js"

const Carts = () => {
  const dispatch = useDispatch();
  // const cart=useSelector((state)=>state.cart.cart)
  const cart=useSelector((state)=>state.carts?.carts)
  const loggedInUser=useSelector((state)=>state.cart?.loggedInUser)
  console.log(cart)
  function payKorapay() {
    window.Korapay.initialize({
        key: import.meta.env.VITE_Public_Key,
        reference: `Ife&VincentCustomer_${Date.now()}`,
        amount: 400, 
        currency: "NGN",
        customer: {
          name: loggedInUser.fullName,
          email: loggedInUser.email
        },
        // notification_url: ""
    });
}
  return (
    <div className='Cards-Holder'>
        <div className='carts-wrapper'>
            <div className='carts-menu'>
                <p>Total Quantity: 2</p>
                <button onClick={()=>dispatch(clearCart())}>Clear cart</button>
                <button onClick={payKorapay}>Pay</button>
                <p>Total Price: 400</p>
            </div>
            {
              cart?.map((e)=>(
                <CartsCard e={e}/>

              ))
            }
        </div>
    </div>
  )
}

export default Carts