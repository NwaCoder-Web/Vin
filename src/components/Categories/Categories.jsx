import React, { useEffect, useState } from 'react';
import data from '../../commerce.json';
import './Categories.css'
import { Link, useParams } from 'react-router-dom';

const Categories = () => {

const  array=Object.values(data)
const [allCarts,setAllCarts]=useState([]);

const {category} = useParams()


useEffect(()=>{
   const allcategory=array.map((e)=>e.category)
   console.log(allcategory)
   const category=allcategory.reduce((acc,cur)=>{
        if(!acc.includes(cur)){
            acc.push(cur)
        }
        return acc;
   },[])
    setAllCarts(category)
},[])

  return (
    <div className='Cards-Holder'>
      <div className="cards-wrapper">
        {
            allCarts.map((e,i)=>(
                <Link className='category-cards' key={i} to={`/category/${e}`}>{e.toUpperCase()}</Link>

            ))
        }
     
      </div>

    </div>
  )
}

export default Categories