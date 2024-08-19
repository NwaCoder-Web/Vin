import React from "react";
import './CartCardStyle.css'
import {inCreaseQty,deCreaseQty,removeCart} from "../../Global/Slice"
import { useDispatch } from "react-redux";
const CartsCard = ({e}) => {
const dispatch = useDispatch();

  return (
    <div className="cards-body">
      <img src={e.image} alt="" />
      <article>
        <h2>{e.name}</h2>
        <p>
          {e.desc}
        </p>
        <h3>₦{e.price}</h3>
      </article>
      <nav>
        <button onClick={()=>dispatch(deCreaseQty(e))}>-</button>
        <p>{e.Qty}</p>
        <button onClick={()=>dispatch(inCreaseQty(e))}>+</button>
        <button onClick={()=>dispatch(removeCart(e))}>Delete</button>
      </nav>
    </div>
  );
};

export default CartsCard;
