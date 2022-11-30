import React from "react";
import BuyNowModal from "./BuyNowModal/BuyNowModal";

const Product = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={product.imgUrl} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <p>Seller: {product.sellerName}</p>
        <p>Price: {product.price}$</p>
        <p>Original Price: {product.originalPrice}$</p>
        <p>Condition: {product.condition}$</p>
        <div className="card-actions">
          <label htmlFor="order-modal" className="btn btn-primary">
            Buy Now
          </label>
          <button className="btn btn-primary">Add to Wishlist</button>
          <BuyNowModal product={product}></BuyNowModal>
        </div>
      </div>
    </div>
  );
};

export default Product;
