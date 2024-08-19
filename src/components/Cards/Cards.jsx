import React from 'react'
import './cards.css'
import AllCards from './AllCards';
import data from '../../commerce.json'

const Cards = () => {

    const array=Object.values(data)
    console.log(array)
  return (
    <>
   
    <div className='Cards-Holder'>
      <div className='cards-wrapper'>
        {
            array.map((item)=>(

                <AllCards item={item}/>
            ))
        }
      
      </div>
    </div>
    </>
  )
}

export default Cards