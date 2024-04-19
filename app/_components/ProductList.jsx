"use client";
import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ productList }) {
  return (
    <div className="mt-10">
      <h2 className="text-green-600 font-bold text-2xl capitalize">
        our popular products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
        {productList.map((product, index) =>index<8&& (
          <ProductItem key={index} product={product}/>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
