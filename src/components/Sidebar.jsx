import React from 'react'

const Sidebar = () => {
  return (
    <aside className="w-full mt-2 md:w-64 px-8">
    <h2 className="text-xl mb-4">Browse by</h2>
    <hr className='mb-4'/>
    <ul className="space-y-4">
      {[
        "Home",
        "ShopAll",
        "New",
        "Best Sellers",
        "Face",
        "Lips",
        "Eyes",
      ].map((item) => (
        <li key={item} className="hover:cursor-pointer">
          {item}
        </li>
      ))}
    </ul>
  </aside>
  )
}

export default Sidebar