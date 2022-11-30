import React from "react";

const Item = ({ item }) => {
  const { _id, name, description } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
