import React from 'react'
import Category1 from '../assets/category-1.png'
import Category2 from '../assets/category-2.png'
import Category3 from '../assets/category-3.png'

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-20">
      <div className="flex flex-col md:flex-row justify-between gap-8">

        {/* Card 1 */}
        <div className="flex p-6 bg-gray-100 rounded-xl w-full md:w-1/3 gap-4 items-center">
          <img src={Category1} alt="Category 1" className="w-20 h-20 object-contain" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Apple</h1>
            <p className="my-3 text-base md:text-lg text-gray-600">
              Apple is one of the most famous smart watches providing company.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex p-6 bg-gray-100 rounded-xl w-full md:w-1/3 gap-4 items-center">
          <img src={Category2} alt="Category 2" className="w-20 h-20 object-contain" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Xiaomi</h1>
            <p className="my-3 text-base md:text-lg text-gray-600">
              Xiaomi smart watches are produced by MI company.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex p-6 bg-gray-100 rounded-xl w-full md:w-1/3 gap-4 items-center">
          <img src={Category3} alt="Category 3" className="w-20 h-20 object-contain" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">FitBit</h1>
            <p className="my-3 text-base md:text-lg text-gray-600">
              FitBit smart watches are best for their health and fitness features.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Categories
