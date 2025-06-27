import React from "react"
import ProductCard from "./ProductCard"

const ProductGrid = ({ products, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse"
          >
            <div className="aspect-square bg-gray-200"></div>
            <div className="p-4 space-y-3">
              <div className="bg-gray-200 rounded-full h-4 w-20"></div>
              <div className="bg-gray-200 rounded h-4 w-full"></div>
              <div className="bg-gray-200 rounded h-4 w-3/4"></div>
              <div className="flex justify-between items-center">
                <div className="bg-gray-200 rounded h-6 w-16"></div>
                <div className="bg-gray-200 rounded h-8 w-16"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-2">No products found</div>
        <div className="text-gray-400">
          Try adjusting your filters or search terms
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid
