// import React, { useState } from "react";

// const CheckOut = () => {
//   const [cart, setCart] = useState([]);
  
//   const handleAddToCart = (item) => {
//     setCart([...cart, item]);
//   };

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.price, 0);
//   };

//   return (
//     <div>
//       <h2>Checkout Page</h2>
//       <div className="vendors">
//         {vendors.map((vendor) => (
//           <div key={vendor.id}>
//             <h3>{vendor.name}</h3>
//             {vendor.items.map((item) => (
//               <VendorItem key={item.id} item={item} onAddToCart={handleAddToCart} />
//             ))}
//           </div>
//         ))}
//       </div>
//       <div className="cart">
//         <h3>Cart</h3>
//         {cart.length === 0 ? (
//           <p>No items in the cart</p>
//         ) : (
//           <ul>
//             {cart.map((item, index) => (
//               <li key={index}>
//                 {item.name} - ${item.price}
//               </li>
//             ))}
//           </ul>
//         )}
//         <h4>Total: ${getTotalPrice()}</h4>
//         <button>Proceed to Payment</button>
//       </div>
//     </div>
//   );
// };

// export default CheckOut;


import React from 'react'
import "./CheckOut.css"

const CheckOut = () => {
  return (
    <div className='checkcon'>
        <div className='checkname'>Checkout</div>
        <div className='checkmain'>
            <div className='checkleft'>
              <div className='checkdetail'>Details</div>
              <hr />
              <div className='checkmamaput'>
                <p className='v'>Vendor: Mama Swallow</p>
                <p className='v'>Food: Oha soup and eba</p>
                <p className='v'>Delivery: 15mins</p>
                <p className='v'>Price: #2000</p>
              </div>
              <hr />
              <div className='checktotal'>
                   <p className='d'>Food price: 2000</p>
                   <p className='d'>Delivery fee: 500</p>
                   <p className='d'>Total: 2500</p>
              </div>
              <hr />
              <div className='checkpay'>
                <div className='che'>Pay on delivery</div>
                <div className='che'>Pay with card</div>
                {/* <div className='chec'>Continue</div> */}
              </div>
            </div>
            <hr style={{background: "black"}}/>
            <div className='checkright'>
            <div className='checkdetail'>Details</div>
            <hr />
              <div className='checkmamaput'>
              <p className='v'>Vendor: Mama Snacks</p>
                <p className='v'>Food: EggRoll</p>
                <p className='v'>Delivery: 15mins</p>
                <p className='v'>Price: #2000</p>
              </div>
              <hr />
              <div className='checktotal'>
              <p className='d'>Food price: 2000</p>
                   <p className='d'>Delivery fee: 500</p>
                   <p className='d'>Total: 2500</p>
              </div>
              <hr />
              <div className='checkpay'>
              <div className='che'>Pay on delivery</div>
              <div className='che'>Pay with card</div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CheckOut