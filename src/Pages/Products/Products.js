import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <h2 className="text-4xl text-center text-primary">Products</h2>
      <div className="my-4 grid grid-cols-1 lg:grid-cols-2  gap-8">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
