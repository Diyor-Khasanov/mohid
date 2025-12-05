import React from 'react'
import Category1 from '../assets/category-1.png'
import Category2 from '../assets/category-2.png'
import Category3 from '../assets/category-3.png'

const Categories = () => {
  return (
    <div className='flex justify-around my-15'>
      <div className='flex p-6 bg-gray-100 rounded-xl max-w-[400px] gap-4'>
        <img src={Category1} alt="Category 1" />
        <div>
          <h1 className='text-4xl font-bold'>Apple</h1>
          <p className='my-3 text-lg text-gray-600'>Apple is one of the most famous smart watches providing company.</p>
        </div>
      </div>

      <div className='flex p-6 bg-gray-100 rounded-xl max-w-[400px] gap-4'>
        <img src={Category2} alt="Category 1" />
        <div>
          <h1 className='text-4xl font-bold'>Xiaomi</h1>
          <p className='my-3 text-lg text-gray-600'>Xiaomi smart watches are produced by MI company.</p>
        </div>
      </div>

      <div className='flex p-6 bg-gray-100 rounded-xl max-w-[400px] gap-4'>
        <img src={Category3} alt="Category 1" />
        <div>
          <h1 className='text-4xl font-bold'>FitBit</h1>
          <p className='my-3 text-lg text-gray-600'>FitBit smart watches are best for there health and fitness features.</p>
        </div>
      </div>
    </div>
  )
}

export default Categories