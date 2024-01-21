import React from "react";
import ProductCard from "./product-card";

const Products = ({ products }) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      {products.map((product) => (
        <ProductCard productInfo={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
