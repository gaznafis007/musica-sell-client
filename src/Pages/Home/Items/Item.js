import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { _id, name, description } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/products/${name}`} className="btn btn-primary">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
