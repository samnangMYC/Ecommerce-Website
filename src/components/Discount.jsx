import React from 'react'

const Discount = () => {
  return (
    <nav className='h-20 duration-200 bg-black px-4 lg:px-12 xl:px-20 flex justify-between items-center text-white'>
        <h1>What are you searching for?</h1>
        <div className='flex gap-1'>
            <h1 className='font-bold'>20% OFF!!</h1>
            <h1>use promo code GECH789</h1>
        </div>
    </nav>
  )
}

export default Discount