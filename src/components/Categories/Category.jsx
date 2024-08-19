import React, { useEffect, useState } from "react";
import AllCards from "../Cards/AllCards";
import { FaShoppingBag } from "react-icons/fa";
import { RiAppsLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import data from '../../commerce.json'

const Category = () => {
    const [cartArray,setCartArray]=useState([]);
    const {category}=useParams();
    const array=Object.values(data)

    useEffect(()=>{
        const cart=array.filter((e)=>e.category === category)
        console.log(cart)
          setCartArray(cart)
    },[])
  return (
    <div className="Cards-Holder">
      <div className="cards-wrapper">
        {
          cartArray.map((e)=>(
        <div className="cards">
          <div className="menus">
            <nav>
              <RiAppsLine />
            </nav>
            <nav>
              <FaShoppingBag />
            </nav>
          </div>
          <img src={e.image} alt="" />
          <div className="about">
            <p>{e.price}</p>
            <p>{e.name}</p>
          </div>
        </div>
          ))
        }
      </div>
    </div>
  );
};

export default Category;
