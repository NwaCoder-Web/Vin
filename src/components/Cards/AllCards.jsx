import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { RiAppsLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {addToCart} from "../../Global/Slice"
import { NavLink } from "react-router-dom";

const AllCards = ({item}) => {
  const dispatch=useDispatch();
  return (
    <div className="cards">
      <div className="menus">
        <nav>
         <NavLink><FaShoppingBag to={"/detail"}/></NavLink> 
        </nav>
        <nav onClick={()=>dispatch(addToCart(item))}>
          <RiAppsLine />
        </nav>
      </div>
      
        <img src={item.image} alt="" />
    
      <div className="about">
        <p >{item.name}</p>
        <p className="pp">{item.price}</p>
      </div>
    </div>
  );
};

export default AllCards;
