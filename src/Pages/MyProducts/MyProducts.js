import React from "react";
import AddProducts from "./AddProducts/AddProducts";

const MyProducts = () => {
  return (
    <div>
      <h2 className="text-center text-4xl">Your Products</h2>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider">Add products for sell</div>
      </div>
      <AddProducts />
    </div>
  );
};

export default MyProducts;
