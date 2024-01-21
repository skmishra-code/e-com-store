import React, { useEffect, useState } from "react";
import PageHeader from "./page-header";
import ProductFilters from "./filters/product-filters";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slice/productSlice";
import Products from "./prodcuts";

const ProductsSection = () => {
  // Add logic to fetch products
  const disptach = useDispatch();
  useEffect(() => {
    disptach(getProducts());
  }, []);
  // logic for pagination

  // logic for filtering and sorting produts
  const productList = useSelector((state) => state.product.products);
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div className="w-full max-w-7xl mx-auto mb-10">
      {/* page heading dev */}
      <PageHeader title={"Products"} />
      {/* container div */}
      <div className="flex px-8 py-8">
        <ProductFilters />
        {/* Product cards */}
        <Products products={productList} />
      </div>
    </div>
  );
};

export default ProductsSection;
