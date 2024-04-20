import { ShoppingCart, Store } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <footer className="bg-slate-700 mt-4 text-white py-8 pt-8">
    <div className="container mx-auto flex justify-between items-center">
      <div>
      <h1 className="text-2xl text-[#31b65d] capitalize">
          grocery
          <span className="text-2xl text-orange-400 capitalize mx-2 ">
            Store
          </span>
        </h1>
     
      </div>
      <div>
        
        <div className="flex mt-2">
          <a href="#" className="mr-4">
          <ShoppingCart />
          </a>
          <a href="#">
          <Store />
          </a>
        </div>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer