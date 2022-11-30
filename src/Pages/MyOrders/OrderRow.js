import React from "react";

const OrderRow = ({ order, idx }) => {
  const { name, productName, price, address } = order;
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{name}</td>
      <td>{productName}</td>
      <td>{price}$</td>
      <td>{address}</td>
    </tr>
  );
};

export default OrderRow;
