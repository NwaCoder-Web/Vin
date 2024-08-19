import React from 'react'
import "./Detail.css"
import { RiStarFill } from "react-icons/ri";
import { BsStarHalf } from "react-icons/bs";
import { FaCircle } from "react-icons/fa6"

const Detail = () => {
  return (
    <div className='detailholder'>
        <div className='detail-left'>
            <div className='detailname'></div>
            <div className='detaildesc'></div>
        </div>
        <div className='detail-center'></div>
        <div className='detail-left'>
            <div className='detaildel'>
                <div>Review: <RiStarFill style={{color:"yellow"}} />
                <RiStarFill style={{color:"yellow"}} />
                <RiStarFill style={{color:"yellow"}} />
                <RiStarFill style={{color:"yellow"}} />
                <BsStarHalf style={{color:"yellow"}}/>
                4.5 (60)
                </div>
            </div>
            <div className='detaildel'>
                <div>Colour: <FaCircle style={{color:"blue"}}/></div>
                <FaCircle style={{color:"brown"}}/>
                <FaCircle style={{color:"yellow"}}/>
                <FaCircle style={{color:"gray"}}/>
            </div>
            <div className='detaildel'>Size: <div className='sizee'>37</div>
            <div className='sizee'>38</div>
            <div className='sizee'>39</div>
            <div className='sizee'>40</div>
            </div>
            <div className='detaildele'>
            <div className='sizeee'>41</div>
            <div className='sizeee'>42</div>
            <div className='sizeee'>43</div>
            <div className='sizeee'>44</div>
            </div>
            <div className='addTo'>Add To Cart</div>
        </div>
    </div>
  )
}

export default Detail