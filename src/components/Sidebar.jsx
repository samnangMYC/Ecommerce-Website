import React from 'react'
import useCategories from '../api/hooks/useCategories';

const Sidebar = () => {
  const { categories, loading, error } = useCategories();

  return (
    <aside className="w-full mt-2 md:w-64 px-8 text-gray-700">
    <h2 className="text-2xl mb-4 font-medium">Browse by</h2>
    <hr className='mb-4'/>
    <ul className="space-y-4">
      {categories.map((item) => (
        <li key={item} className="hover:cursor-pointer hover:text-amber-900 capitalize">
          {item}
        </li>
      ))}
    </ul>
  </aside>
  )
}

export default Sidebar