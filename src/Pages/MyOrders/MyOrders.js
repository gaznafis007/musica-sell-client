import React, { useContext } from "react";
import OrderTable from "./OrderTable";

const MyOrders = () => {
  return (
    <div>
      <h2 className="text-4xl text-center my-6">My orders</h2>
      <OrderTable></OrderTable>
    </div>
  );
};

export default MyOrders;
