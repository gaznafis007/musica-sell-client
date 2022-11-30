import React from "react";

const TableRow = ({ product, idx }) => {
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>{product.originalPrice}</td>
      <td>{product.condition}</td>
    </tr>
  );
};

export default TableRow;
