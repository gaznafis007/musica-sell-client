import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const BuyNowModal = ({ product }) => {
  const navigate = useNavigate();
  const { name, price, address } = product;
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const handleOrder = (data) => {
    const order = {
      name: user?.displayName,
      productName: name,
      price,
      address,
      email: user?.email,
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((orderData) => {
        console.log(orderData);
        navigate("/myorders");
      });
  };
  return (
    <div>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="order-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Place Your Order</h3>
          <form onSubmit={handleSubmit(handleOrder)} className="ml-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                className="input input-bordered max-w-sm"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="text"
                defaultValue={user?.email}
                className="input input-bordered max-w-sm"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                defaultValue={name}
                disabled
                className="input input-bordered max-w-sm"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Price</span>
              </label>
              <input
                type="text"
                defaultValue={price}
                disabled
                className="input input-bordered max-w-sm"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                defaultValue={address}
                className="input input-bordered max-w-sm"
              />
            </div>
            <input
              type="submit"
              className="btn btn-outline btn-primary my-2"
              value="Buy now"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyNowModal;
