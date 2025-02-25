import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const RouteSection = () => {
  return (
    <div className='h-20 px-8  lg:px-12 xl:px-20 flex gap-2 items-center text-gray-600'>
        <h1>Home</h1>
        <MdKeyboardArrowRight />
        <p>Product</p>
    </div>
  )
}

export default RouteSection