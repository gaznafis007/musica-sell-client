import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Context/AuthProvider";
import OrderRow from "./OrderRow";

const OrderTable = () => {
  const { user } = useContext(AuthContext);
  const { data: orders = [] } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/orders?email=${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <OrderRow key={order._id} order={order} idx={idx}></OrderRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
