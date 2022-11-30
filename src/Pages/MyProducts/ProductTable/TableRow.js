import React from "react";

const TableRow = ({ product, idx, refetch }) => {
  const handleDeleteProduct = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };
  return (
    <tr>
      <th>{idx + 1}</th>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>{product.originalPrice}</td>
      <td>{product.condition}</td>
      <td>
        <button
          onClick={() => handleDeleteProduct(product._id)}
          className="btn btn-sm btn-error btn-outline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
