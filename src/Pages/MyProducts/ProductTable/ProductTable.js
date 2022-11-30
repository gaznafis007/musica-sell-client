import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import TableRow from "./TableRow";

const ProductTable = () => {
  const { user } = useContext(AuthContext);
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products?email=${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });
  return (
    <div className="overflow-x-auto my-4">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Resale Price</th>
            <th>Original Price</th>
            <th>Product Condition</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => (
            <TableRow
              product={product}
              idx={idx}
              key={product._id}
              refetch={refetch}
            ></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
